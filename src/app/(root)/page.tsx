import MainBtn from "@/components/main-button";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="flex-row justify-center">
      <h1>혹시 내가 전생에도 성균관대 유생?</h1>
      <h3>나는 어떤 유생이었을까?</h3>
      <Image src="/image/lion.png" alt="lion" width={300} height={300} />
      <MainBtn />
    </div>
  );
}
{
}
