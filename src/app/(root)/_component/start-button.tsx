"use client";

import useSWRCurrentStep from "@/app/hook/useSWRCurrenStep";
import useSWREI from "@/app/hook/useSWREI";
import useSWRNS from "@/app/hook/useSWRNS";
import useSWRPrevButton from "@/app/hook/useSWRPrevButton";
import useSWRTF from "@/app/hook/useSWRTF";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function StartButton() {
  const [TF, mutateTF] = useSWRTF();
  const [NS, mutateNS] = useSWRNS();
  const [EI, mutateEI] = useSWREI();
  const [currentStep, mutateCurrentStep] = useSWRCurrentStep();
  const [prevButtonNumber, setPrevButtonNumber] = useSWRPrevButton();
  return (
    <Link href="/test">
      <Button
        className="bg-pointColor hover:bg-pointColor/40 shadow-gray-600 text-black"
        onClick={() => {
          setTimeout(() => {
            mutateEI(0);
            mutateNS(0);
            mutateTF(0);
            mutateCurrentStep(0);
            setPrevButtonNumber(0);
          }, 0);
        }}
      >
        유생 테스트
      </Button>
    </Link>
  );
}
