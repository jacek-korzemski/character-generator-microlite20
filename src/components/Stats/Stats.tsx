import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Wrapper = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  text-align: center;
  font-size: 16px;
`;

const Value = styled.div`
  display: flex;
  span {
    display: block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 24px;
    border: 1px solid rgba(0, 0, 0, 0.32);
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.64);
  }
`;

const Stats = () => {
  const { str, int, wis, dex, con, cha } = useCharacterDetails();

  const calculateBonus = (stat: number) => {
    let value = Math.ceil((stat - 10) / 2);
    if (value > 0) {
      return `+${value}`;
    }
    return value;
  };

  return (
    <Wrapper>
      <Stat>
        <Label>Strength</Label>
        <Value>
          <span>{str}</span>
          <span>{calculateBonus(str || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>Inteligence</Label>
        <Value>
          <span>{int}</span>
          <span>{calculateBonus(int || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>Wisdom</Label>
        <Value>
          <span>{wis}</span>
          <span>{calculateBonus(wis || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>Dexterity</Label>
        <Value>
          <span>{dex}</span>
          <span>{calculateBonus(dex || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>Constitution</Label>
        <Value>
          <span>{con}</span>
          <span>{calculateBonus(con || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>Charisma</Label>
        <Value>
          <span>{cha}</span>
          <span>{calculateBonus(cha || 0)}</span>
        </Value>
      </Stat>
    </Wrapper>
  );
};

export default Stats;
