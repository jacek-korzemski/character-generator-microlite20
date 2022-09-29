import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Wrapper = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 32px;
    border: 1px solid rgba(0, 0, 0, 0.32);
    margin: 0;
    padding: 0;
  }
`;

const Stats = () => {
  const { strength, dexterity, mind } = useCharacterDetails();

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
        <Label>STR</Label>
        <Value>
          <span>{strength}</span>
          <span>{calculateBonus(strength || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>DEX</Label>
        <Value>
          <span>{dexterity}</span>
          <span>{calculateBonus(dexterity || 0)}</span>
        </Value>
      </Stat>
      <Stat>
        <Label>MIND</Label>
        <Value>
          <span>{mind}</span>
          <span>{calculateBonus(mind || 0)}</span>
        </Value>
      </Stat>
    </Wrapper>
  );
};

export default Stats;
