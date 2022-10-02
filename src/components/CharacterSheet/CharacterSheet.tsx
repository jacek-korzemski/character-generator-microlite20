import styled from "styled-components";
import useModal from "src/hooks/useModal";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import SetPlayerName from "src/components/Modals/SetPlayerName";
import SetCharacterClass from "src/components/Modals/SetCharacterClass";
import Feats from "src/components/Feats";
import Stats from "src/components/Stats";
import SetStats from "src/components/Modals/SetStats";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px 0;
  width: 100%;
  height: 100%;
  max-width: calc(860px - 16px - 16px - 2px);
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
  grid-gap: 30px;
  grid-template-columns: ${({ columnsTemplate }) => columnsTemplate};
  table {
    width: 100%;
    td {
      text-align: center;
      padding: 0 4px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 16px;
    text-align: center;
    margin: 0 0 3px 0;
  }
  div {
    width: 54px;
    height: 54px;
    border: 1px solid black;
  }
`;

const CharacterSheet = ({ readyToPrint }: { readyToPrint: boolean }) => {
  const editIcon = (
    <span style={{ display: "inline", fontStyle: "normal", fontSize: "79%" }}>
      🖊
    </span>
  );
  const { name, characterClass, attackBonus, savingThrows } =
    useCharacterDetails();
  const { setContent } = useModal();
  return (
    <Wrapper>
      <Grid columnsTemplate="8fr 1fr 1fr 1fr">
        <div>
          <TextData
            onClick={() => {
              setContent(<SetPlayerName />);
            }}
          >
            <label>{!readyToPrint && editIcon} Character Name:</label>
            <span>{name}</span>
          </TextData>
          <TextData
            onClick={() => {
              setContent(<SetCharacterClass />);
            }}
          >
            <label>{!readyToPrint && editIcon} Class:</label>
            <span>{characterClass}</span>
          </TextData>
        </div>
        <div>
          <Box>
            <label>Level</label>
            <div></div>
          </Box>
        </div>
        <div>
          <Box>
            <label>AC</label>
            <div></div>
          </Box>
        </div>
        <div>
          <Box>
            <label>HP</label>
            <div></div>
          </Box>
        </div>
      </Grid>
      <div>
        <Header
          clickable={true}
          onClick={() => {
            setContent(<SetStats />);
          }}
        >
          {!readyToPrint && editIcon} Stats
        </Header>
        <Stats />
      </div>
      <Grid columnsTemplate={"1fr 1fr"}>
        <div>
          <Header>Features</Header>
          <Feats />
        </div>
        <div>
          <Header>Attack Bonus</Header>
          {attackBonus}
          <Header>Saving Throws</Header>
          {savingThrows}
        </div>
      </Grid>
      <h3
        style={{
          textAlign: "center",
          marginTop: "15px",
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
