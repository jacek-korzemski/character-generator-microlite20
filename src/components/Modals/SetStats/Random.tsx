import { useState, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";
import Button from "src/components/Button";
import useModal from "src/hooks/useModal";

const Wrapper = styled.div``;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const { setStr, setInt, setWis, setDex, setCon, setCha } =
    useCharacterDetails();
  const { setContent } = useModal();

  const [newStats, setNewStats] = useState<{
    str: number;
    int: number;
    wis: number;
    dex: number;
    con: number;
    cha: number;
  }>({
    str: 0,
    int: 0,
    wis: 0,
    dex: 0,
    con: 0,
    cha: 0,
  });

  const randomizeStat = () => {
    return _.random(1, 6) + _.random(1, 6) + 6;
  };

  const reRoll = () => {
    let randomizedStats = {
      str: randomizeStat(),
      int: randomizeStat(),
      wis: randomizeStat(),
      dex: randomizeStat(),
      con: randomizeStat(),
      cha: randomizeStat(),
    };

    let values = Object.values(randomizedStats);
    let total = values.reduce((partialSum, a) => partialSum + a, 0);

    if (total / 6 > 12) {
      reRoll();
      return;
    }
    if ((_.min(values) || 0) > 9) {
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
          <Label>Inteligence</Label>
          <Value>{newStats.int}</Value>
        </Stat>
        <Stat>
          <Label>Wisdom</Label>
          <Value>{newStats.wis}</Value>
        </Stat>
        <Stat>
          <Label>Dexterity</Label>
          <Value>{newStats.dex}</Value>
        </Stat>
        <Stat>
          <Label>Constitution</Label>
          <Value>{newStats.con}</Value>
        </Stat>
        <Stat>
          <Label>Charisma</Label>
          <Value>{newStats.cha}</Value>
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
            if (setStr && setInt && setWis && setDex && setCon && setCha) {
              setStr(newStats.str);
              setInt(newStats.int);
              setWis(newStats.wis);
              setDex(newStats.dex);
              setCon(newStats.con);
              setCha(newStats.cha);
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
