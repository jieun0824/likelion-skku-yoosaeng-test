import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import StartButton from "./_component/start-button";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-extrabold text-center sm:text-sm mobile:text-lg">
        혹시 내가 전생에도 성균관대 유생?
      </h1>
      <h3>나는 어떤 유생이었을까?</h3>
      <Image src="/image/lion.png" alt="lion" width={300} height={300} />
      <StartButton />
    </div>
  );
}
{
}
