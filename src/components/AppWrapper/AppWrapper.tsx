import { ReactNode } from "react";
import { CharacterDetailsProvider } from "src/contexts/CharacterDetailsContext";
import { ContextMenuContextProvider } from "src/contexts/ContextMenuContext";
import { ModalContextProvider } from "src/contexts/ModalContext";
import { SnackbarContextProvider } from "src/contexts/SnackbarContext";

import "src/css/normalize.css";
import "src/css/skeleton.css";
import "src/css/main.css";

const AppWrapper = ({ children }: { children: ReactNode | null }) => {
  return (
    <CharacterDetailsProvider>
      <ModalContextProvider>
        <SnackbarContextProvider>
          <ContextMenuContextProvider>{children}</ContextMenuContextProvider>
        </SnackbarContextProvider>
      </ModalContextProvider>
    </CharacterDetailsProvider>
  );
};

export default AppWrapper;
