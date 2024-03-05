"use client";

import useSWRCurrentStep from "@/app/hook/useSWRCurrenStep";
import useSWREI from "@/app/hook/useSWREI";
import useSWRGender from "@/app/hook/useSWRGender";
import useSWRNS from "@/app/hook/useSWRNS";
import useSWRPrevButton from "@/app/hook/useSWRPrevButton";
import useSWRTF from "@/app/hook/useSWRTF";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function StartButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [TF, mutateTF] = useSWRTF();
  const [NS, mutateNS] = useSWRNS();
  const [EI, mutateEI] = useSWREI();
  const [gender, mutateGender] = useSWRGender();
  const [currentStep, mutateCurrentStep] = useSWRCurrentStep();
  const [prevButtonNumber, setPrevButtonNumber] = useSWRPrevButton();
  return (
    <Link href="/test">
      <Button
        className={cn(
          "bg-pointColor hover:bg-pointColor/40 shadow-gray-600 text-black",
          className
        )}
        onClick={() => {
          setTimeout(() => {
            mutateEI(0);
            mutateNS(0);
            mutateTF(0);
            mutateCurrentStep(0);
            mutateGender(null);
            setPrevButtonNumber({
              0: null,
              1: null,
              2: null,
              3: null,
              4: null,
              5: null,
              6: null,
              7: null,
              8: null,
              9: null,
            });
          }, 0);
        }}
      >
        {text}
      </Button>
    </Link>
  );
}
