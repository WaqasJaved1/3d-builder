import { MouseEventHandler, useEffect, useRef, useState, type FC } from "react";
import { ChromePicker } from "react-color";
import { PanelCard } from "../../../ui/panel-card";

import * as S from "./elements";

interface Props {
  color: string;
  onColorChange: (color: string) => void;
}
export const ColorPicker: FC<Props> = ({ color, onColorChange }) => {
  const [showPicker, setShowPicker] = useState(true); // To toggle color picker visibility
  const pickerRef = useRef<HTMLDivElement>(null); // Ref for the color picker div

  // Toggle color picker visibility on button click
  const toggleColorPicker: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setShowPicker((prev) => !prev);
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false); // Close picker when clicking outside
      }
    };

    // Add event listener on mount
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <PanelCard title="Set Object Color">
      <div style={{ position: "relative" }}>
        {/* Button to toggle color picker */}
        <S.StyledButton onClick={toggleColorPicker}>
          <S.ColorBlock color={color} />
          Choose color
        </S.StyledButton>

        {/* Show color picker if showPicker is true */}
        {showPicker && (
          <div ref={pickerRef} style={{ position: "absolute", zIndex: 2 }}>
            <ChromePicker
              color={color}
              onChangeComplete={(c) => onColorChange(c.hex)}
            />
          </div>
        )}
      </div>
    </PanelCard>
  );
};
