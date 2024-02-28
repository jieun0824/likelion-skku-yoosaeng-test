import useImmutableSWR from "swr/immutable";
export default function useSWRNS() {
  const { data: NS, mutate: mutateNS } = useImmutableSWR("NS", {
    fallbackData: 0,
  });

  return [NS, mutateNS];
}
