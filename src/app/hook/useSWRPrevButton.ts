import { useEffect } from "react";
import useImmutableSWR from "swr/immutable";
export default function useSWRPrevButton() {
  const { data: prevButton, mutate: mutatePrevButton } = useImmutableSWR(
    "PrevButton",
    {
      fallbackData: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
      },
    }
  );

  return [prevButton, mutatePrevButton];
}
