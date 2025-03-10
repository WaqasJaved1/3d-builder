import { useThree } from "@react-three/fiber";
import { useEffect, type FC } from "react";

const defaultCameraPosition = [10, 5, 10];
const defaultLookAt = [0, 1, 0];

export const CameraSetup: FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(
      defaultCameraPosition[0],
      defaultCameraPosition[1],
      defaultCameraPosition[2]
    );
    camera.lookAt(defaultLookAt[0], defaultLookAt[1], defaultLookAt[2]);
  }, [camera]);

  return null;
};
