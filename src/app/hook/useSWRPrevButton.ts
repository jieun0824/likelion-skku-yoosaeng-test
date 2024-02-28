import useImmutableSWR from "swr/immutable";
export default function useSWRPrevButton() {
  const { data: prevButton, mutate: mutatePrevButton } = useImmutableSWR(
    "PrevButton",
    {
      fallbackData: 0,
    }
  );

  return [prevButton, mutatePrevButton];
}
