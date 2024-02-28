import ResultComponent from "../_component/result-component";

export default async function ResultPage({
  params,
}: {
  params: { resultNum: string };
}) {
  const resultData = [
    {
      param: "GQEWG",
      title: "'내가 왕이다' 리더형 유생",
      description:
        "주도적이고, 다른 유생들을 이끄는 총책임자 역할을 하는군요. 어쩌면 당신... 먼 과거에는 왕이었을지도..?",
    },
    {
      param: "PWEMG",
      title: "'노는게 제일 좋아!'뽀로로 유생",
      description:
        "어디서 좀 노셨군요? 아이같은 해맑음을 가진 유생! 어쩌면 고요한 성균관이 당신을 힘들게 했을지도 모릅니다.",
    },
    {
      param: "TNWEM",
      title: "'은행 나무가 아름다우니 막걸리 한잔 하러 가세!'낭만파 유생",
      description:
        "낭만에 죽고 낭만에 사는 당신, 어쩌면 죽여주는 풍경에 훗날 수험생들을 고통스럽게할 시가를 적었을지도 모릅니다.",
    },
    {
      param: "NFJWE",
      title:
        "'당신이 우리 유생의 미래입니다...' 똑똑하지만 어딘가 재수없는 1등 유생",
      description:
        "냉철하고 똑부러지는 당신은 어디에서나 시기와 질투를 한몸에 받습니다. 옳은 말을 하다가 유배라도 당하지는 않았을까 걱정이 되네요!",
    },
    {
      param: "AGEMW",
      title:
        "‘인생 한번인거, 열심히 살아야하지 않겠어?’ 몸이 12개? 여기서 저기서 열심히 현생을 사는 홍길동형 유생",
      description:
        "활동적이고, 자기관리에 힘쓰는 당신은 무엇을 해도 성공할 유생입니다. 너무 바쁘게 살아 주변사람들이 걱정할 수 있으니, 주의하세요!",
    },
    {
      param: "BWEKD",
      title: "'이것은 무엇에 쓰는 것일꼬? 호기심 많은 외교적 유생",
      description:
        "성균관의 연예인, 사교적인 당신은 성균관에서 모르는 사람이 없을 정도입니다. 넘치는 호기심과 추진력으로 성균관 유생들에게 신문물을 가져와주는 유생이었을지도..!",
    },
    {
      param: "KGWED",
      title: "‘아프지마 바둑아’ 다정다감 유생",
      description:
        "넓은 포용력을 가지고 있어 다른 유생들이 의지하는 당신은 성균관에서 없어서는 안될 존재입니다. 하지만 본인에게는 엄격한 경향이 있는 당신! 조금 더 너그러워져보는 것은 어떨까요?",
    },
    {
      param: "YHWEF",
      title: "(명륜당을 지나, 수선관을 가면...) 최적루트 유생",
      description:
        "효율성에 빠져 사는 당신... 어쩌면 후대까지 전해내려오는 발명품을 만든 유생일지도 모릅니다. ",
    },
  ];

  const result = resultData.find(
    (result) => result.param === params.resultNum
  )!;

  return (
    <div>
      <ResultComponent data={result} />
    </div>
  );
}
