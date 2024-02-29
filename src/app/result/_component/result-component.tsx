"use client";
import Image from "next/image";

export default function ResultComponent({
  data,
}: {
  data: { param: string; title: string; description: string };
}) {
  const title = data.title.split("\n");
  console.log(title);
  const description = data.description.split("\n");
  return (
    <div className="flex flex-col justify-center items-center gap-14  ">
      <div className="text-xl text-center">나는 과거에 어떤 유생이었을까?</div>
      <div className=" bg-opacity-10 bg-gradient-to-br from-pointColor/15 to-bgColor px-4 py-10 shadow-black shadow-lg">
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <div className="font-diphylleia">
            {title.map((element, index) => (
              <p
                key={index}
                className={`${
                  index === title.length - 1 ? "text-3xl font-bold" : "text-sm"
                }`}
              >
                {element}
              </p>
            ))}
          </div>
          <Image
            src={`/result/${data.param}.png`}
            alt={data.param}
            width={300}
            height={300}
          />
          <div className="font-diphylleia">
            {description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
