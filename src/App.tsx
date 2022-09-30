import AppWrapper from "src/components/AppWrapper";
import CharacterSheet from "src/components/CharacterSheet";
import ContextMenuContainer from "src/components/ContextMenuContainer";
import ModalContainer from "src/components/ModalContainer";
import SnackbarContainer from "src/components/SnackbarContainer";
import styled from "styled-components";
import Button from "src/components/Button";
import { useEffect, useState } from "react";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function App() {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <AppWrapper>
      {/* Additional components overlay */}
      <ModalContainer />
      <SnackbarContainer />
      <ContextMenuContainer />

      {/* Main Content */}
      <CharacterSheet />
      {!isHidden && (
        <ButtonWrapper>
          <Button
            onClick={() => {
              setIsHidden(true);
              setTimeout(() => {
                window.print();
              });
              setTimeout(() => {
                setIsHidden(false);
              }, 1000);
            }}
          >
            Pobierz
          </Button>
        </ButtonWrapper>
      )}
    </AppWrapper>
  );
}

export default App;
