import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import useModal from "src/hooks/useModal";
import Button from "src/components/Button";

const Option = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.32);
  padding-bottom: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`;

const Predefined = () => {
  const { setStrength, setDexterity, setMind } = useCharacterDetails();
  const { setContent } = useModal();

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Predefined Options</h3>
      <Option>
        <div>
          The Brute:
          <br />
          <strong>STR: </strong>15 | <strong>DEX: </strong>10 |{" "}
          <strong>MIND: </strong> 9
        </div>
        <Button
          onClick={() => {
            if (setStrength && setDexterity && setMind) {
              setStrength(15);
              setDexterity(10);
              setMind(9);
            }
            setContent(null);
          }}
          className="button-primary"
        >
          Select
        </Button>
      </Option>
      <Option>
        <div>
          The Fencer:
          <br />
          <strong>STR: </strong>12 | <strong>DEX: </strong>15 |{" "}
          <strong>MIND: </strong> 11
        </div>
        <Button
          onClick={() => {
            if (setStrength && setDexterity && setMind) {
              setStrength(12);
              setDexterity(15);
              setMind(11);
            }
            setContent(null);
          }}
          className="button-primary"
        >
          Select
        </Button>
      </Option>
      <Option>
        <div>
          Jacek of all Trades:
          <br />
          <strong>STR: </strong>13 | <strong>DEX: </strong>13 |{" "}
          <strong>MIND: </strong> 13
        </div>
        <Button
          onClick={() => {
            if (setStrength && setDexterity && setMind) {
              setStrength(13);
              setDexterity(13);
              setMind(13);
            }
            setContent(null);
          }}
          className="button-primary"
        >
          Select
        </Button>
      </Option>
      <Option style={{ borderBottom: "none" }}>
        <div>
          Caster:
          <br />
          <strong>STR: </strong>8 | <strong>DEX: </strong>12 |{" "}
          <strong>MIND: </strong> 15
        </div>
        <Button
          onClick={() => {
            if (setStrength && setDexterity && setMind) {
              setStrength(8);
              setDexterity(12);
              setMind(15);
            }
            setContent(null);
          }}
          className="button-primary"
        >
          Select
        </Button>
      </Option>
      <Button
        onClick={() => {
          setContent(null);
        }}
      >
        Close
      </Button>
    </>
  );
};

export default Predefined;
