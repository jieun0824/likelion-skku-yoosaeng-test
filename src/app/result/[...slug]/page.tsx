import { MemoizedResultComponent } from "../_component/result-component";

export default async function ResultPage({
  params,
}: {
  params: { slug: string[] };
}) {
  //imageUrl[0] = female , [1] = male
  const resultData = [
    {
      param: "GQEWG",
      title: "'내가 왕이다' \n리더형 유생",
      description:
        "주도적이고, 다른 유생들을 이끄는 총책임자 역할! \n어쩌면 당신... 먼 과거에는 왕이었을지도..?",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2Fd0795cea-54d7-4a57-b97f-a57fa599ea0b%2FUntitled.png?table=block&id=12796872-2ab6-4637-9b4d-5cb447c00f4a&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2Fa960532e-c7d9-4cd6-95de-b7eaca60dfeb%2FUntitled.png?table=block&id=2eab9056-9485-4ff6-9060-63bdd9ffdb9c&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
    {
      param: "PWEMG",
      title: "'노는게 제일 좋아!'\n뽀로로 유생",
      description:
        "어디서 좀 노셨군요? 아이같은 해맑음을 가진 유생! \n어쩌면 고요한 성균관이 당신을 힘들게 했을지도 모릅니다.",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F094ada94-2d34-4818-9040-b6d9764611ad%2FUntitled.png?table=block&id=dd920b2c-354a-4f41-b438-fcf96701949d&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F5791122a-11a8-47eb-b525-32aacbb13872%2FUntitled.png?table=block&id=5ed0d59c-5d0c-4380-9816-575ede86f62d&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=670&userId=&cache=v2",
      ],
    },
    {
      param: "TNWEM",
      title: "'은행 나무가 아름다우니 막걸리 한잔 하러 가세!'\n낭만파 유생",
      description:
        "낭만에 죽고 낭만에 사는 당신, \n어쩌면 죽여주는 풍경에 훗날 수험생들을 \n고통스럽게할 시가를 적었을지도 모릅니다.",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F00fd3b54-0c11-4434-b9ac-af3b398510d1%2FUntitled.png?table=block&id=74532a31-fae4-4378-b632-8ef672181f8d&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F4deb46d6-f71a-44d1-b4aa-83920ec80b56%2FUntitled.png?table=block&id=9a9efcb7-907d-4910-9bd4-d224a155dcc7&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
    {
      param: "NFJWE",
      title:
        "'당신이 우리 유생의 미래입니다...' \n똑똑하지만 어딘가 재수없는 1등 유생",
      description:
        "냉철하고 똑부러지는 당신은 \n어디에서나 시기와 질투를 한몸에 받습니다. \n옳은 말을 하다가 \n유배라도 당하지는 않았을까 걱정이 되네요!",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F37b03f56-2a1e-4ab7-8cad-1d285e46c102%2FUntitled.png?table=block&id=e00da129-fcbf-4f89-8699-18d390ac4864&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2Fef6a2ff4-21e7-4b9d-b3cd-98f1084753bf%2FDALLE_2024-02-19_00.25.35_-_Depict_a_top-ranking_Sungkyunkwan_scholar_who_is_exceptionally_intelligent_but_somewhat_unpopular_among_his_peers_standing_as_the_embodiment_of_the_.webp?table=block&id=e3577f5d-3940-44de-8a64-bee311845564&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
    {
      param: "AGEMW",
      title:
        "‘인생 한번인거, 열심히 살아야하지 않겠어?’ \n몸이 12개? \n여기서 저기서 열심히 현생을 사는 \n홍길동형 유생",
      description:
        "활동적이고, 자기관리에 힘쓰는 당신은 \n무엇을 해도 성공할 유생입니다. \n너무 바쁘게 살아 주변사람들이 걱정할 수 있으니, \n주의하세요!",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F47aee3aa-a0f1-423b-a0a7-03e9d9781e67%2FUntitled.png?table=block&id=305a54e2-478b-4ba6-920c-e8d7f1c809a0&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F7f58125e-8526-4b4e-b0a8-717989744316%2FUntitled.png?table=block&id=e5e58a8a-cda3-4f0a-a21a-c48f6a444b77&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
    {
      param: "BWEKD",
      title: "'이것은 무엇에 쓰는 것일꼬?' \n호기심 많은 외교적 유생",
      description:
        "성균관의 연예인! \n사교적인 당신은 \n성균관에서 모르는 사람이 없을 정도입니다. \n넘치는 호기심과 추진력으로 성균관 유생들에게 \n신문물을 가져와주는 유생이었을지도..!",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2Feff58006-2322-4572-8ebb-f8ffa85cda80%2FUntitled.png?table=block&id=cfcb7e2d-ad2c-4854-aa20-f08cb40e450c&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F907c0e7c-a89e-4f33-af4c-2f82e75d305b%2FUntitled.png?table=block&id=2ef13ccf-49a2-4bb0-b9af-7e6212864eb8&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
      ],
    },
    {
      param: "KGWED",
      title: "‘아프지마 바둑아’ \n다정다감 유생",
      description:
        "넓은 포용력을 가지고 있어 \n다른 유생들이 의지하는 당신은 \n성균관에서 없어서는 안될 존재입니다. \n하지만 본인에게는 엄격한 경향이 있는 당신! \n조금 더 너그러워져보는 것은 어떨까요?",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F7ba0e45f-062b-44d7-a52e-6ba0c36cab6e%2FUntitled.png?table=block&id=5b5441f8-b941-4678-9a13-4e3fdf5db252&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2Fa8991e43-f309-49eb-a327-0e61db357e62%2FDALLE_2024-02-19_00.56.06_-_A_tender_and_affectionate_scene_from_the_Joseon_Dynasty_featuring_a_young_Confucian_scholar_known_as_a_Seonggyungwan_student_gently_comforting_a_.webp?table=block&id=400924ec-963f-45b8-959f-6239e0cb3762&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
    {
      param: "YHWEF",
      title: "'명륜당을 지나, 수선관을 가면...' \n최적루트 유생",
      description:
        "효율성에 빠져 사는 당신... \n어쩌면 후대까지 전해내려오는 발명품을 만든 \n유생일지도 모릅니다. ",
      imageUrl: [
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F503d72c9-9d72-4464-9e2d-9af4b35cb63d%2FUntitled.png?table=block&id=dcbf5f6e-eaf0-4ce0-b3ee-338b930596ec&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=1470&userId=&cache=v2",
        "https://classic-sushi-ec0.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc678eb59-d48a-4b2f-92bd-101657fb2b1e%2F71600543-4536-4d25-b03c-3f78a1cdd113%2FDALLE_2024-02-19_00.35.19_-_A_traditional_Korean_scholar_dressed_in_hanbok_is_walking_on_a_path_that_leads_from_Myeongnyundang_to_Suseon_Hall_within_the_historic_Sungkyunkwan_U.webp?table=block&id=685b9c8f-34e2-451c-8f7f-4cce7e92adb5&spaceId=c678eb59-d48a-4b2f-92bd-101657fb2b1e&width=770&userId=&cache=v2",
      ],
    },
  ];

  const result = resultData.find((result) => result.param === params.slug[0])!;

  return (
    <div>
      <MemoizedResultComponent data={result} gender={params.slug[1]} />
    </div>
  );
}
