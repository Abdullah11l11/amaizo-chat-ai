import translateApi from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

const translateText = async (text: string): Promise<string> => {
  const response = await translateApi.post("/text", {
    from: "auto",
    to: "en",
    text: text,
  });

  return response.data.trans;
};

export const useTranslateText = (
  onSuccess?: (text: string) => void,
  onError?: () => void
) => {
  return useMutation({
    mutationFn: translateText,
    onSuccess,
    onError,
  });
};
