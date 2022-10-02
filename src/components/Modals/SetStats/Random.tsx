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

  .button {
    margin-bottom: 0;
    max-width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 0 8px;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.06);
  }
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

type StatProperties = {
  str: number;
  int: number;
  wis: number;
  dex: number;
  con: number;
  cha: number;
};

const Random = () => {
  const {
    str,
    int,
    wis,
    dex,
    con,
    cha,
    setStr,
    setInt,
    setWis,
    setDex,
    setCon,
    setCha,
  } = useCharacterDetails();
  const { setContent } = useModal();

  const [points, setPoints] = useState<number>(0);
  const [newStats, setNewStats] = useState<StatProperties>({
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
    setPoints(0);
  };

  useEffect(() => {
    if (str === 0) {
      reRoll();
    } else {
      setNewStats({
        str: str || 1,
        int: int || 1,
        wis: wis || 1,
        dex: dex || 1,
        con: con || 1,
        cha: cha || 1,
      });
    }
  }, []);

  return (
    <Wrapper>
      <h3 style={{ textAlign: "center" }}>Randomize Stats</h3>
      <Stats>
        <Stat>
          <Label>Strength</Label>
          <Button
            onClick={() => {
              if (newStats.str > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, str: newStats.str - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.str}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.str < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, str: newStats.str + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
        <Stat>
          <Label>Inteligence</Label>
          <Button
            onClick={() => {
              if (newStats.int > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, int: newStats.int - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.int}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.int < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, int: newStats.int + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
        <Stat>
          <Label>Wisdom</Label>
          <Button
            onClick={() => {
              if (newStats.wis > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, wis: newStats.wis - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.wis}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.wis < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, wis: newStats.wis + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
        <Stat>
          <Label>Dexterity</Label>
          <Button
            onClick={() => {
              if (newStats.dex > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, dex: newStats.dex - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.dex}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.dex < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, dex: newStats.dex + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
        <Stat>
          <Label>Constitution</Label>
          <Button
            onClick={() => {
              if (newStats.con > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, con: newStats.con - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.con}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.con < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, con: newStats.con + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
        <Stat>
          <Label>Charisma</Label>
          <Button
            onClick={() => {
              if (newStats.cha > 8) {
                setPoints((prev) => prev + 1);
                setNewStats({ ...newStats, cha: newStats.cha - 1 });
              }
            }}
          >
            -
          </Button>
          <Value>{newStats.cha}</Value>
          <Button
            onClick={() => {
              if (points > 0 && newStats.cha < 18) {
                setPoints((prev) => prev - 1);
                setNewStats({ ...newStats, cha: newStats.cha + 1 });
              }
            }}
          >
            +
          </Button>
        </Stat>
      </Stats>
      <hr />
      <p style={{ textAlign: "center" }}>Available points: {points}</p>
      <p style={{ textAlign: "center" }}>
        Total points:{" "}
        {Object.values(newStats).reduce((partialSum, a) => partialSum + a, 0) +
          points}
      </p>

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
