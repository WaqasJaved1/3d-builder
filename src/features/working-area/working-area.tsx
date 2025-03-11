import { Canvas } from "@react-three/fiber";

import { useRef, useState, type FC } from "react";

import { OrbitControls } from "@react-three/drei";

import * as S from "./elements";
import { CameraSetup } from "./camera-setup";

import { Geometry } from "./geometry";
import { StandardMaterial } from "./standard-material";
import { PropertiesPanel } from "../properties-panel";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { ToolsPanel } from "../tools-panel";

interface Props {
  model?: string;
}

export const WorkingArea: FC<Props> = () => {
  const canvasRef = useRef(null);

  const threeDModel = useSelector(
    (state: RootState) => state.threeDModel.model
  );

  const [selectedObjectId, setSelectedObjectId] = useState<string>();
  const [hoveredItemId, setHoveredItemId] = useState<string>();

  const selectedObject = threeDModel.find((_) => _.id === selectedObjectId);

  const isObjectSelected = Boolean(selectedObject);

  return (
    <div>
      <ToolsPanel setSelectedObjectId={setSelectedObjectId} />

      <S.Row>
        <S.CanvasWrapper
          id="canvas-container"
          ref={canvasRef}
          isSideBarOpen={isObjectSelected}
        >
          <Canvas shadows>
            {threeDModel.map((object, index) => (
              <mesh
                key={index}
                castShadow
                receiveShadow
                position={[
                  object.position.x,
                  object.position.y,
                  object.position.z,
                ]}
                rotation={[
                  object.rotation.x,
                  object.rotation.y,
                  object.rotation.z,
                ]}
                onClick={() => setSelectedObjectId(object.id)}
                onPointerOver={() => setHoveredItemId(object.id)}
                onPointerOut={() => setHoveredItemId("")}
              >
                <Geometry object={object} />

                <StandardMaterial
                  object={object}
                  isHovered={hoveredItemId === object.id}
                  isSelected={selectedObjectId === object.id}
                  isGhost={isObjectSelected && selectedObjectId !== object.id}
                />
              </mesh>
            ))}
            {/* Setup */}
            <CameraSetup />
            {/* Orbit Control */}
            <OrbitControls enableZoom={true} />
            {/* Lights*/}
            <ambientLight intensity={1} />
            <directionalLight
              position={[-50, -50, 50]}
              intensity={0.5}
              castShadow
            />
            {/* Ground */}
            <mesh
              position={[0, -0.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="gray" />
            </mesh>
            {/* Add XYZ Axes */}
            <axesHelper args={[5]} /> {/* 5 units for each axis */}
            {/* Add Grid */}
            {/* 100 units grid with 100 divisions */}
            <gridHelper args={[100, 100]} />{" "}
          </Canvas>
        </S.CanvasWrapper>
        {selectedObject && (
          <PropertiesPanel
            object={selectedObject}
            setSelectedObjectId={setSelectedObjectId}
          />
        )}
      </S.Row>
    </div>
  );
};
