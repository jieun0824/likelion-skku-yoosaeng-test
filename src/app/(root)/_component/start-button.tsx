"use client";

import useSWRCurrentStep from "@/app/hook/useSWRCurrenStep";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { hasCookie, deleteCookie } from "cookies-next";

export default function StartButton() {
  const [currentStep, mutateCurrentStep] = useSWRCurrentStep();
  return (
    <Link href="/test">
      <Button
        className="bg-pointColor hover:bg-pointColor/40 shadow-gray-600 text-black"
        onClick={() => {
          setTimeout(() => {
            mutateCurrentStep(0);
            if (hasCookie("prevButtonNumber")) {
              deleteCookie("prevButtonNumber");
            }
          }, 0);
        }}
      >
        유생 테스트
      </Button>
    </Link>
  );
}
