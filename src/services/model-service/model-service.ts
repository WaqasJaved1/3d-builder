import { building, tank } from "./models";
import { Model3D } from "../../types";

export type ModelWithName = {
  name: string;
  model: Model3D;
};

export class ThreeDModelService {
  public async getModelsList(): Promise<ModelWithName[]> {
    return [
      { name: "tank", model: tank },
      {
        name: "building",
        model: building,
      },
    ];
  }
}
