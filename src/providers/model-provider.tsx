import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from "react";
import { ThreeDModelService } from "../services";

type ModelContextType = {
  threeDModelService: ThreeDModelService;
};

const ThreeDModelContext = createContext<ModelContextType | undefined>(
  undefined
);

/**
 * OpenTelemetry Provider for React
 */
export const ThreeDModelProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const threeDModelService = new ThreeDModelService();

  return (
    <ThreeDModelContext.Provider value={{ threeDModelService }}>
      {children}
    </ThreeDModelContext.Provider>
  );
};

export const useModelService = () => {
  const tracer = useContext(ThreeDModelContext);
  if (!tracer) throw new Error("useOtel must be used within an OtelProvider");
  return tracer;
};
