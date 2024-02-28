import TestComponent from "./_component/test-component";

export default async function TestPage() {
  // const data = await fetch("http://localhost:3000/data/test.json", {
  //   next: { revalidate: 60 },
  // }).then((res) => res.json());

  // console.log(data);

  const testData = [
    {
      id: "0",
      question:
        "드디어 기다리고 기다리던 '고하노라'!\n 고하노라 행진을 할 때 나는..?",
      answer: [
        "선두에서 뒤 유생 친구들을 전두지휘한다.",
        "선두는 부담스러워~ ... 유생 친구들 사이에 \n섞여있는다.",
      ],
    },

    {
      id: "1",
      question:
        "성균관대 재학생이라면 '성균논어' 수업은 필수지! \n그런데 수업에서 성균논어 독후감 과제가 나왔다. \n내가 독후감을 쓴다면?",
      answer: [
        "논어에서 인상 깊은 구절을 꼽아 \n현재 내 상황에 적용시키면서 감상평을 남긴다.",
        "내가 과거에 살았다면 어떻게 생활했을 지 \n상상하며 감상평을 남긴다.",
      ],
    },
    {
      id: "2",
      question:
        "유생 친구가 가파른 수선관 언덕을 내려오다가 \n넘어져서 다쳤다고 한다. \n이 때 내 반응은?",
      answer: [
        "바로 다친 부위를 확인하고 밴드를 사러 간다.",
        "우선 괜찮냐고 물어보며 걱정의 눈빛을 보낸다.",
      ],
    },
    {
      id: "3",
      question:
        "수업 시간까지 5분이 남았는데 강의실은 수선관!\n이 때 당신이 드는 생각은?",
      answer: [
        "종로07이나 학교 셔틀 탈수 있나??",
        "곤돌라 설치되는 상상함 ㅋㅋ",
      ],
    },
    {
      id: "4",
      question:
        "학식 메뉴가 별로라 오랜만에 나가서 밥을 먹으려고 한다. \n이 때 당신은?",
      answer: [
        "동방에 친구를 불러 함께 \n나누미 떡볶이를 나눠먹는다.",
        "조용한 포보에서 밥을 먹으며 \n나만의 시간을 보낸다.",
      ],
    },
    {
      id: "5",
      question: "전공진입 후 전공 수업 팀플에 늦은 당신!",
      answer: [
        "'셔틀이 늦게왔어 ㅠ 미안' \n늦은 이유를 설명한다.",
        "'늦어서 정말 미안해 ㅠ' \n사과를 한다.",
      ],
    },
    {
      id: "6",
      question: "여름에, 친구가 법학관 옥상을 올라가자한다. \n이 때 당신은?",
      answer: [
        "‘아 벌레 많은데…’ \n다음에 가자",
        "‘친구가 낭만을 즐기고싶구나’ \n같이 가준다",
      ],
    },
    {
      id: "7",
      question: "학교에 가보니 동아리 홍보부스들이 있다. \n이때 당신은?",
      answer: [
        "마음에 드는 부스에 여기저기 들어가서 \n동아리에 대해 알려달라고 한다.",
        "괜찮아 보이는 부스 근처에서 서성거리며 \n나를 봐주기를 기다린다.",
      ],
    },
    {
      id: "8",
      question:
        "바야흐로 축제 시즌, 킹고 킹고 에스카라 킹고! \n응원단의 힘찬 응원이 시작되었다. \n이때 들려오는 노래소리에 나는 ….",
      answer: [
        "화면에 띄워진 노래 가사에 집중하며 \n학교에 대한 애교심을 키운다.",
        "성균관대에 입학한 것이 실감이 난다. \n축제를 즐기는 나의 모습이 너무 멋있다며 \n감동한다.",
      ],
    },
  ];

  return <TestComponent data={testData} />;
}
