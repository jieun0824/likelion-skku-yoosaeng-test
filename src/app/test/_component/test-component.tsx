"use client";

import useSWRCurrentStep from "@/app/hook/useSWRCurrenStep";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export enum GenderType {
  male = 1,
  female = 0,
}

type answerType = null | number;

export default function TestComponent({
  data,
}: {
  data: { id: number; question: string; answer: string[] }[];
}) {
  const [currentStep, mutateCurrentStep] = useSWRCurrentStep();
  const [step, setStep] = useState(currentStep);
  const newQuestion = data[step].question.split("\n");

  //모든 선지 기억(이전 버튼 클릭 시 이전 선지 삭제)
  //const [prevButtonNumber, setPrevButtonNumber] = useSWRPrevButton();
  //현재 선지 버튼
  const [buttonNumber, setButtonNumber] = useState<answerType>(null);
  const prevButtonNumber: { [key: number]: answerType } | {} = JSON.parse(
    getCookie("prevButtonNumber") || "{}"
  );

  useEffect(() => {
    console.log(prevButtonNumber);
  }, [prevButtonNumber]);
  const router = useRouter();
  const BtnClickHandler = (index: answerType) => {
    if (buttonNumber == index) {
      setButtonNumber(null);
    } else {
      setButtonNumber(index);
    }
  };
  const nextHandler = (buttonNumber: answerType) => {
    if (buttonNumber == null) {
      return;
    } //뒤로 넘어가지 않음
    setCookie(
      "prevButtonNumber",
      JSON.stringify({ ...prevButtonNumber, [step]: buttonNumber })
    ); //이전 선지로 저장

    setTimeout(async () => {
      if (currentStep === data.length - 1) {
        //마지막스텝일시
        await judgeResult().then((result) => router.push(`/result/${result}`));
      } else {
        //마지막 step 이 아니면
        setButtonNumber(null);
        mutateCurrentStep(currentStep + 1); //다음스텝으로 변경
        setStep(step + 1); //for rendering
      }
    }, 300);
  };

  // if (buttonNumber === 1) {
  //   if ([1, 5, 8].includes(step)) {
  //     mutateEI(EI + 1); //E 추가
  //   } else if ([2, 4, 9].includes(step)) {
  //     mutateNS(NS + 1); //S 추가
  //   } else if ([3, 6, 7].includes(step)) {
  //     mutateTF(TF + 1); //T 추가
  //   } else if (step == 0) {
  //     mutateGender(GenderType.male);
  //   }
  // } else if (buttonNumber === 2 && step === 0) {
  //   mutateGender(GenderType.female);
  // }

  const judgeResult = async () => {
    let EI = 0;
    let NS = 0;
    let TF = 0;
    let gender = 0;
    Object.keys(prevButtonNumber).forEach((key) => {
      //key -> step number
      const intKey = parseInt(key);
      const buttonType = prevButtonNumber[intKey];
      if (intKey in [1, 5, 8] && buttonType === 1) {
        EI++;
        console.log("EI:", EI);
      } else if (parseInt(key) in [2, 4, 9] && buttonType === 1) {
        NS++;
        console.log("NS", NS);
      } else if (parseInt(key) in [3, 6, 7] && buttonType === 1) {
        TF++;
        console.log("TF", TF);
      } else if (parseInt(key) === 0) {
        if (buttonType === 1) {
          gender = GenderType.male;
        } else if (buttonType === 2) {
          gender = GenderType.female;
        }
      }
    });
    return new Promise((resolve) => {
      let result = "";
      if (EI >= 2) {
        result += "E";
      } else {
        result += "I";
      }
      if (NS >= 2) {
        result += "S";
      } else {
        result += "N";
      }
      if (TF >= 2) {
        result += "T";
      } else {
        result += "F";
      }

      switch (result) {
        case "IST":
          resolve("YHWEF");
        case "ISF":
          resolve("KGWED");
        case "INF":
          resolve("TNWEM");
        case "INT":
          resolve("NFJWE");
        case "EST":
          resolve("AGEMW");
        case "ESF":
          resolve("BWEKD");
        case "ENF":
          resolve("PWEMG");
        case "ENT":
          resolve("GQEWG");
        default:
          resolve(result);
      }
    });
  };

  const BackHandler = () => {
    setTimeout(() => {
      mutateCurrentStep(currentStep - 1); //이전스텝으로 변경
      setButtonNumber(null);
      setCookie(
        "prevButtonNumber",
        JSON.stringify({ ...prevButtonNumber, [currentStep]: null })
      );
      setStep(step - 1); //for rendering
    }, 300);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="progressBar text-center">
        <Progress value={((step + 1) / data.length) * 100} />
        <p className="mt-4">
          {step + 1}/{data.length}
        </p>
      </div>
      <div className="question whitespace-normal text-center">
        {newQuestion.map((el, i) => {
          return <p key={i}>{el}</p>;
        })}
      </div>
      <div className="answer flex flex-col gap-2">
        {data[step].answer.map((answer, index) => {
          const newAnswer = answer.split(`\n`);
          return (
            <Button
              key={index}
              onClick={() => BtnClickHandler(index + 1)}
              className={`border-pointColor border flex-col h-auto whitespace-normal bg-bgColor hover:bg-pointColor/40 ${
                buttonNumber === index + 1 && "bg-pointColor/40"
              } px-4 py-3`}
            >
              {newAnswer.map((el, i) => {
                return <p key={i}>{el}</p>;
              })}
            </Button>
          );
        })}
      </div>
      <div className="Button flex justify-evenly">
        <Button
          className={`bg-pointColor hover:bg-pointColor/40 ${
            step === 0 && "hidden"
          }`}
          onClick={BackHandler}
        >
          이전
        </Button>
        <Button
          className="bg-pointColor hover:bg-pointColor/40"
          onClick={() => nextHandler(buttonNumber)}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
