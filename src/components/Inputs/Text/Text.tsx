import styled from "styled-components";
import { SetStateAction } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
`;

const TextInput = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string | undefined;
  setValue: any;
}) => {
  return (
    <Wrapper>
      <label htmlFor="exampleEmailInput">{label}: </label>
      <input
        className="u-full-width"
        type="text"
        id="characterName"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value || ""}
      />
    </Wrapper>
  );
};

export default TextInput;
