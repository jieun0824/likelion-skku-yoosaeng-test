import useImmutableSWR from "swr/immutable";
export default function useSWRCurrentStep() {
  const { data: currentStep, mutate: mutateCurrentStep } = useImmutableSWR(
    "CurrentStep",
    {
      fallbackData: 0,
    }
  );

  return [currentStep, mutateCurrentStep];
}
