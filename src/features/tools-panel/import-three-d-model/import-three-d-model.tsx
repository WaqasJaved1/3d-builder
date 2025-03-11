import { useState, type FC } from "react";
import * as S from "./elements";
import { useModelList } from "../../../hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { loadModel } from "../../../state";
import { ModelWithName } from "../../../services";

export const ImportThreeDModel: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const { data } = useModelList();

  const handleSelect = (item: ModelWithName) => {
    setSelectedItem(item.name);
    setIsOpen(false); // Close dropdown after selection
    dispatch(loadModel(item.model));
  };

  return (
    <S.Container>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedItem || "Select an option"} ▼
      </button>

      {isOpen && (
        <S.DropDown>
          {data?.map((option, index) => (
            <S.DropDownItem key={index} onClick={() => handleSelect(option)}>
              {option.name}
            </S.DropDownItem>
          ))}
        </S.DropDown>
      )}
    </S.Container>
  );
};
