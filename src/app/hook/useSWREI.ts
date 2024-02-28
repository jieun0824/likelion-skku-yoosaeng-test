import { useEffect } from "react";
import useImmutableSWR from "swr/immutable";

export default function useSWREI() {
  const { data: EI, mutate: mutateEI } = useImmutableSWR("EI", {
    fallbackData: 0,
  });

  return [EI, mutateEI];
}
