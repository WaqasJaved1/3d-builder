import { useQuery } from "@tanstack/react-query";
import { useModelService } from "../providers/model-provider/model-provider";
import { ModelWithName } from "../services";

export const useModelList = () => {
  const { threeDModelService } = useModelService();

  return useQuery<ModelWithName[], Error>({
    queryKey: ["model-list"],
    queryFn: async () => {
      return await threeDModelService.getModelsList();
    },
  });
};
