// export const ThreeDModelService =

import { building, tank } from "../models";
import { Object3D } from "../types";

export type Object3DGroup = {
  name: string;
  objects: Object3D[];
};

export class ThreeDModelService {
  public async getModelsList(): Promise<Object3DGroup[]> {
    return [
      { name: "tank", objects: tank },
      {
        name: "building",
        objects: building,
      },
    ];
  }
}
