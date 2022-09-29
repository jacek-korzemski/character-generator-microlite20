import { useState } from "react";
import TextInput from "src/components/Inputs/Text";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import useModal from "src/hooks/useModal";
import Button from "src/components/Button";

const SetPlayerName = () => {
  const [newName, setNewName] = useState<string>("");
  const { name, setName } = useCharacterDetails();
  const { setContent } = useModal();

  return (
    <>
      <TextInput
        label={"Set character name"}
        value={newName}
        setValue={setNewName}
      />
      <div>
        <Button
          onClick={() => {
            setContent(null);
          }}
        >
          Close
        </Button>
        <Button
          className="button-primary"
          onClick={() => {
            if (setName && newName !== name && newName !== "") {
              setName(newName);
            }
            setContent(null);
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default SetPlayerName;
