import { useAsync } from "react-use";

export default function useIsLoading() {
  const { loading } = useAsync(async () => {});

  return loading;
}
