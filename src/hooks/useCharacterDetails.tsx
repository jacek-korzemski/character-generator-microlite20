import { useContext } from "react";
import { CharacterDetailsContext } from "src/contexts/CharacterDetailsContext";

const useCharacterDetails = () => {
  const context = useContext(CharacterDetailsContext);

  if (context === null) {
    throw new Error("useCharacterDetails context cannot be null");
  }

  return context;
};

export default useCharacterDetails;
