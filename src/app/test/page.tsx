import TestComponent from "./_component/test-component";

export default async function TestPage() {
  const data = await fetch("http://localhost:3000/data/test.json", {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  console.log(data);

  return <TestComponent data={data} />;
}
