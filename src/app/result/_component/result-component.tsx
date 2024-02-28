"use client";
import Image from "next/image";

export default function ResultComponent({
  data,
}: {
  data: { param: string; title: string; description: string };
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <div className="text-xl">나는 과거에 어떤 유생이었을까?</div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1>{data.title}</h1>
        <Image
          src={`/result/${data.param}.png`}
          alt={data.param}
          width={300}
          height={300}
        />
        <div>{data.description}</div>
      </div>
    </div>
  );
}
