import { useQuery } from "@tanstack/react-query";
import { useModelService } from "../providers/model-provider";
import { Object3DGroup } from "../services";

export const useModelsList = () => {
  const { threeDModelService } = useModelService();

  return useQuery<Object3DGroup[], Error>({
    queryKey: ["models-list"],
    queryFn: async () => {
      return await threeDModelService.getModelsList();
    },
  });
};
