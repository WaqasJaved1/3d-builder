import { Canvas } from "@react-three/fiber";

import { useRef, useState, type FC } from "react";

import { OrbitControls } from "@react-three/drei";

import * as S from "./elements";
import { CameraSetup } from "./camera-setup";
import { v4 as uuidv4 } from "uuid";
import { Axis, Object3D } from "../../types";
import { Geometry } from "./geometry";
import { StandardMaterial } from "./standard-material";
import { PropertiesPanel } from "../properties-panel";
import { building, tank } from "../../models";

interface Props {
  model?: string;
}

export const WorkingArea: FC<Props> = () => {
  const canvasRef = useRef(null);
  const [mesh, setMesh] = useState<Object3D[]>(
    Math.random() > 0.5 ? building : tank
  );

  const addSquare = () => {
    setMesh([
      ...mesh,
      {
        id: uuidv4(),
        type: "rectangle",
        color: "#00ff00",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        size: [1, 1],
      },
    ]);
  };

  const addCircle = () => {
    setMesh([
      ...mesh,
      {
        id: uuidv4(),
        type: "circle",
        color: "red",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        size: [1],
      },
    ]);
  };

  const addCylinder = () => {
    setMesh([
      ...mesh,
      {
        id: uuidv4(),
        type: "cylinder",
        color: "red",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        size: [1, 1, 1],
      },
    ]);
  };

  const [selectedItemId, setSelectedItemId] = useState<string>();
  const [hoveredItemId, setHoveredItemId] = useState<string>();

  const selectedItem = mesh.find((_) => _.id === selectedItemId);

  const handleColorChange = (color: string) => {
    if (!selectedItemId) {
      return;
    }

    setMesh(
      mesh.map((_) => {
        if (_.id === selectedItemId) {
          return {
            ..._,
            color,
          };
        }

        return _;
      })
    );
  };

  const handlePositionChange = (axis: Axis, value: number) => {
    if (!selectedItemId) {
      return;
    }

    setMesh(
      mesh.map((_) => {
        if (_.id === selectedItemId) {
          return {
            ..._,
            position: {
              ..._.position,
              [axis]: value,
            },
          };
        }

        return _;
      })
    );
  };

  const handleRotationChange = (axis: Axis, value: number) => {
    if (!selectedItemId) {
      return;
    }

    setMesh(
      mesh.map((_) => {
        if (_.id === selectedItemId) {
          return {
            ..._,
            rotation: {
              ..._.rotation,
              [axis]: value,
            },
          };
        }

        return _;
      })
    );
  };

  const handleSizeChange = (index: number, value: number) => {
    if (!selectedItemId) {
      return;
    }

    console.log(index, value);

    setMesh(
      mesh.map((_) => {
        if (_.id === selectedItemId) {
          return {
            ..._,
            size: _.size.map((s, i) => (i === index ? value : s)),
          };
        }

        return _;
      })
    );
  };

  return (
    <div>
      <div>
        <button onClick={addSquare}>Rectangle</button>
        <button onClick={addCircle}>Circle</button>
        <button onClick={addCylinder}>Sphere</button>
      </div>

      {/* TODO: Camera Controller */}

      <S.Layout>
        <S.CanvasWrapper id="canvas-container" ref={canvasRef}>
          <Canvas style={{ background: "black" }} shadows>
            {mesh.map((object, index) => (
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
                onClick={() => setSelectedItemId(object.id)}
                onPointerOver={() => setHoveredItemId(object.id)} // Mouse over event
                onPointerOut={() => setHoveredItemId("")} // Mouse out event
              >
                <Geometry object={object} />

                <StandardMaterial
                  object={object}
                  isHovered={hoveredItemId === object.id}
                  isSelected={selectedItemId === object.id}
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
        <S.PropertiesWrapper>
          <PropertiesPanel
            object={selectedItem}
            onColorChange={handleColorChange}
            onPositionChange={handlePositionChange}
            onRotationChange={handleRotationChange}
            onSizeChange={handleSizeChange}
          />
        </S.PropertiesWrapper>
      </S.Layout>
    </div>
  );
};
