import { useState } from "react";
import styled from "styled-components";
import Button from "src/components/Button";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import useModal from "src/hooks/useModal";

const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div``;
const Value = styled.div`
  width: 42px;
  height: 42px;
  line-height: 42px;
  font-size: 32px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.32);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: block;
    width: 21px;
    height: 42px;
    line-height: 42px;
    padding: 0;
    margin: 0;
  }
`;

const BuyPoints = () => {
  const [pointsLeft, setPointesLeft] = useState(31);
  const [str, setStr] = useState(3);
  const [dex, setDex] = useState(3);
  const [mnd, setMnd] = useState(3);
  const { setStrength, setDexterity, setMind } = useCharacterDetails();
  const { setContent } = useModal();

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Buy Stat Points</h3>
      <p style={{ textAlign: "center" }}>
        Points left: <strong>{pointsLeft}</strong>
      </p>
      <Stats>
        <Stat>
          <Label>Strength</Label>
          <Buttons>
            <button
              onClick={() => {
                if (str < 4) {
                  return;
                }
                setStr((prev) => prev - 1);
                setPointesLeft((prev) => prev + 1);
              }}
            >
              -
            </button>
            <Value>{str}</Value>
            <button
              onClick={() => {
                if (str > 17 || pointsLeft <= 0) {
                  return;
                }
                setStr((prev) => prev + 1);
                setPointesLeft((prev) => prev - 1);
              }}
            >
              +
            </button>
          </Buttons>
        </Stat>
        <Stat>
          <Label>Dexterity</Label>
          <Buttons>
            <button
              onClick={() => {
                if (dex < 4) {
                  return;
                }
                setDex((prev) => prev - 1);
                setPointesLeft((prev) => prev + 1);
              }}
            >
              -
            </button>
            <Value>{dex}</Value>
            <button
              onClick={() => {
                if (dex > 17 || pointsLeft <= 0) {
                  return;
                }
                setDex((prev) => prev + 1);
                setPointesLeft((prev) => prev - 1);
              }}
            >
              +
            </button>
          </Buttons>
        </Stat>
        <Stat>
          <Label>Mind</Label>
          <Buttons>
            <button
              onClick={() => {
                if (mnd < 4) {
                  return;
                }
                setMnd((prev) => prev - 1);
                setPointesLeft((prev) => prev + 1);
              }}
            >
              -
            </button>
            <Value>{mnd}</Value>
            <button
              onClick={() => {
                if (mnd > 17 || pointsLeft <= 0) {
                  return;
                }
                setMnd((prev) => prev + 1);
                setPointesLeft((prev) => prev - 1);
              }}
            >
              +
            </button>
          </Buttons>
        </Stat>
      </Stats>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
      >
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
            if (setStrength && setDexterity && setMind) {
              setStrength(str);
              setDexterity(dex);
              setMind(mnd);
              setContent(null);
            }
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default BuyPoints;
