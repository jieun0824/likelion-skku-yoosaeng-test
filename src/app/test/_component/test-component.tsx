"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import useSWRCurrentStep from "@/app/hook/useSWRCurrenStep";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSWRPrevButton from "@/app/hook/useSWRPrevButton";
import useSWRTF from "@/app/hook/useSWRTF";
import useSWRNS from "@/app/hook/useSWRNS";
import useSWREI from "@/app/hook/useSWREI";

type answerType = null | number;

export default function TestComponent({
  data,
}: {
  data: { [key: string]: { question: string; answer: string[] } };
}) {
  const [TF, mutateTF] = useSWRTF();
  const [NS, mutateNS] = useSWRNS();
  const [EI, mutateEI] = useSWREI();

  const [currentStep, mutateCurrentStep] = useSWRCurrentStep();
  const [step, setStep] = useState(currentStep);
  //이전 선지 기억(이전 버튼 클릭 시 이전 선지 삭제)
  const [prevButtonNumber, setPrevButtonNumber] = useSWRPrevButton();
  //현재 선지 버튼
  const [buttonNumber, setButtonNumber] = useState<answerType>(null);
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
    setPrevButtonNumber(buttonNumber); //이전 선지로 저장
    if (prevButtonNumber === 1) {
      if ([0, 4, 7].includes(step)) {
        mutateEI(EI + 1); //E 추가
      } else if ([1, 3, 8].includes(step)) {
        mutateNS(NS + 1); //S 추가
      } else if ([2, 5, 6].includes(step)) {
        mutateTF(TF + 1); //T 추가
      }
    }
    setTimeout(() => {
      if (currentStep === 8) {
        router.push("/result/1");
      } else {
        //마지막 step 이 아니면
        setButtonNumber(null);
        mutateCurrentStep(currentStep + 1); //다음스텝으로 변경
        setStep(step + 1); //for rendering
      }
    }, 300);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="progressBar text-center">
        {step + 1}/{data.length}
      </div>
      <div className="question">{data[step].question}</div>
      <div className="answer flex flex-col gap-2">
        {data[step].answer.map((answer, index) => (
          <Button
            key={index}
            onClick={() => BtnClickHandler(index + 1)}
            className={`border-pointColor border bg-bgColor hover:bg-pointColor/40 ${
              buttonNumber === index + 1 && "bg-pointColor/40"
            } p-8`}
          >
            {answer}
          </Button>
        ))}
      </div>
      <div className="Button flex justify-evenly">
        <Button
          className={`bg-pointColor hover:bg-pointColor/40 ${
            step === 0 && "hidden"
          }`}
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
