"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

function KaKaoBtn({
  param,
  item,
  imageUrl,
}: {
  param: string;
  item: string;
  imageUrl: string;
}) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const onClickHandler = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "유생 테스트",
        description: "나는 과거에 어떤 유생이었을까?",
        imageUrl: imageUrl,
        link: {
          webUrl: shareUrl,
        },
      },
      itemContent: {
        items: [
          {
            item: "나의 유생 유형",
            itemOp: item,
          },
        ],
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            webUrl: shareUrl,
          },
        },
      ],
    });
  };
  return (
    <Button
      className="bg-[#FFE808] text-black hover:bg-[#FFE808] hover:opacity-50 hover:shadow-black hover:shadow-sm"
      onClick={onClickHandler}
    >
      <Image
        src={"/image/KakaoTalk_logo.svg"}
        alt="kakao"
        width={30}
        height={30}
        className="mr-2"
      />
      카카오톡 공유하기
    </Button>
  );
}

export default function ResultComponent({
  data,
}: {
  data: { param: string; title: string; description: string; imageUrl: string };
}) {
  const title = data.title.split("\n");
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
      <KaKaoBtn
        param={data.param}
        item={title[title.length - 1]}
        imageUrl={data.imageUrl}
      />
    </div>
  );
}
