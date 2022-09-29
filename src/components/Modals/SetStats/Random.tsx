import { useState, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import Button from "src/components/Button";
import useModal from "src/hooks/useModal";

const Wrapper = styled.div``;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
`;

const Label = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Value = styled.div`
  width: 42px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  font-size: 26px;
  border: 1px solid rgba(0, 0, 0, 0.32);
`;

const Random = () => {
  const { setStrength, setDexterity, setMind } = useCharacterDetails();
  const { setContent } = useModal();

  const [newStats, setNewStats] = useState<{
    str: number;
    dex: number;
    mind: number;
  }>({
    str: 0,
    dex: 0,
    mind: 0,
  });

  const randomizeStat = () => {
    return _.random(1, 6) + _.random(1, 6) + 6;
  };

  const reRoll = () => {
    let randomizedStats = {
      str: randomizeStat(),
      dex: randomizeStat(),
      mind: randomizeStat(),
    };

    let values = Object.values(randomizedStats);
    let total = values.reduce((partialSum, a) => partialSum + a, 0);

    if (total > 45) {
      reRoll();
      return;
    }

    if (total / 3 > 13) {
      reRoll();
      return;
    }

    setNewStats({ ...randomizedStats });
  };

  useEffect(() => {
    reRoll();
  }, []);

  return (
    <Wrapper>
      <h3 style={{ textAlign: "center" }}>Randomize Stats</h3>
      <Stats>
        <Stat>
          <Label>Strength</Label>
          <Value>{newStats.str}</Value>
        </Stat>
        <Stat>
          <Label>Dexterity</Label>
          <Value>{newStats.dex}</Value>
        </Stat>
        <Stat>
          <Label>Mind</Label>
          <Value>{newStats.mind}</Value>
        </Stat>
      </Stats>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            reRoll();
          }}
        >
          Re-Roll
        </Button>
        <Button
          onClick={() => {
            if (setStrength && setDexterity && setMind) {
              setStrength(newStats.str);
              setDexterity(newStats.dex);
              setMind(newStats.mind);
            }
            setContent(null);
          }}
          className="button-primary"
        >
          Save
        </Button>
      </div>
    </Wrapper>
  );
};

export default Random;
