import { useEffect } from "react";
import useImmutableSWR from "swr/immutable";

export enum GenderType {
  female = 0,
  male = 1,
}

export default function useSWRGender() {
  const { data: gender, mutate: mutateGender } = useImmutableSWR("gender", {
    fallbackData: null,
  });

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  return [gender, mutateGender];
}
