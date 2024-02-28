"use client";
import useSWREI from "@/app/hook/useSWREI";
import useSWRNS from "@/app/hook/useSWRNS";
import useSWRTF from "@/app/hook/useSWRTF";

export default function ResultPage() {
  const [EI, mutateEI] = useSWREI();
  const [NS, mutateNS] = useSWRNS();
  const [TF, mutateTF] = useSWRTF();
  return (
    <div>
      EI: {EI}
      NS: {NS}
      TF: {TF}
    </div>
  );
}
