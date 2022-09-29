import styled from "styled-components";
import useModal from "src/hooks/useModal";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import SetPlayerName from "src/components/Modals/SetPlayerName";
import SetCharacterClass from "src/components/Modals/SetCharacterClass";
import Feats from "src/components/Feats";
import Stats from "src/components/Stats";
import SetStats from "src/components/Modals/SetStats";
import Skills from "src/components/Skills";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  height: 100%;
  max-width: calc(960px - 16px - 16px - 2px);
`;

const TextData = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  font-size: 20px;
  font-style: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    opacity: 0.7;
  }
  span {
    font-style: italic;
    display: block;
    margin: 0;
  }
  label {
    left: 0;
    top: 0;
    margin-bottom: 0;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Header = styled.h2<{ clickable?: boolean }>`
  text-align: center;
  margin: 0 auto 10px auto;
  width: fit-content;

  ${({ clickable }) =>
    clickable &&
    `
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  `}
`;

const Grid = styled.div<{
  columnsTemplate: string;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ columnsTemplate }) => columnsTemplate};
`;

const CharacterSheet = () => {
  const { name, characterClass, features } = useCharacterDetails();
  const { setContent } = useModal();
  return (
    <Wrapper>
      <TextData
        onClick={() => {
          setContent(<SetPlayerName />);
        }}
      >
        <label>Character Name:</label>
        <span>{name}</span>
      </TextData>
      <TextData
        onClick={() => {
          setContent(<SetCharacterClass />);
        }}
      >
        <label>Class:</label>
        <span>{characterClass}</span>
      </TextData>
      <Grid columnsTemplate={"2fr 1fr"}>
        <div>
          <Header>Features</Header>
          <Feats features={features || []} />
        </div>
        <div>
          <Header
            clickable={true}
            onClick={() => {
              setContent(<SetStats />);
            }}
          >
            Stats
          </Header>
          <Stats />
        </div>
      </Grid>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>Skills</h3>
      <Skills />
      <h3
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "-20px",
        }}
      >
        Equipement, notes and everything else
      </h3>
      <hr />
    </Wrapper>
  );
};

export default CharacterSheet;
