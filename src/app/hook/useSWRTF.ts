import useImmutableSWR from "swr/immutable";
export default function useSWRTF() {
  const { data: TF, mutate: mutateTF } = useImmutableSWR("TF", {
    fallbackData: 0,
  });

  return [TF, mutateTF];
}
