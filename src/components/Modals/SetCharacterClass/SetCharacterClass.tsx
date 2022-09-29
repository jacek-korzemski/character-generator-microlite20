import { useState } from "react";
import styled from "styled-components";
import classes from "src/data/classes";
import Button from "src/components/Button";
import useModal from "src/hooks/useModal";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: calc(960px - 32px);
  max-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 16px;
  padding-left: 16px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Option = styled.div`
  width: 100%;
  padding: 15px 0;
  margin: 15px auto;
  h2,
  p,
  hr {
    margin: 0;
  }

  table {
    width: 100%;
  }

  table td {
    text-align: center;
    vertical-align: top;
  }
  table tr td:first-child {
    font-weight: bold;
  }
`;

const Top = styled.div`
  position: relative;
  width: calc(100% + 16px);
  margin-top: -8px;
  border-radius: 8px 8px 0 0;
  height: 32px;
  z-index: 1999;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  font-size: 20px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    padding: 0 16px;
  }
  .clickable {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SetCharacterClass = () => {
  const [opened, setOpened] = useState<number[] | null>(null);
  const { setContent } = useModal();
  const {
    characterClass,
    setCharacterClass,
    setFeatures,
    setAttackBonus,
    setSavingThrows,
  } = useCharacterDetails();

  const toggleSkills = (index: number) => {
    if (Array.isArray(opened) && opened.includes(index)) {
      setOpened([...opened.filter((elem) => elem !== index)]);
    }
    if (Array.isArray(opened) && !opened.includes(index)) {
      setOpened([...opened, index]);
    }
    if (!Array.isArray(opened)) {
      setOpened([index]);
    }
  };

  return (
    <>
      <Top>
        <span>Select Character Class</span>
        <span
          className="clickable"
          onClick={() => {
            setContent(null);
          }}
        >
          X
        </span>
      </Top>
      <Wrapper>
        {classes.map((elem, index) => (
          <Option key={elem.name}>
            <Header>
              <h2>
                {elem.name} {characterClass === elem.name && "✔"}
              </h2>
              <div>
                <Button
                  onClick={() => {
                    toggleSkills(index);
                  }}
                >
                  {opened?.includes(index) ? "Hide" : "Show"} details
                </Button>
                <Button
                  className="button-primary"
                  onClick={() => {
                    if (setCharacterClass) {
                      setCharacterClass(elem.name);
                      if (setFeatures && setAttackBonus && setSavingThrows) {
                        setFeatures(elem.features);
                        setAttackBonus(elem.attackBonus);
                        setSavingThrows(elem.savingThrows);
                      }
                      setContent(null);
                    }
                  }}
                >
                  Select this class
                </Button>
              </div>
            </Header>
            <p style={{ marginBottom: "16px" }}>{elem.description}</p>
            <div>
              {opened?.includes(index) && (
                <>
                  <h4>Details</h4>
                  <p style={{ marginBottom: "16px" }}>
                    Hit dice: {elem.hitDice}, starting HP: {elem.startingHp}
                    {elem.spells && ", spells: " + elem.spells}
                  </p>
                  <h4>Attack bonus table:</h4>
                  {elem.attackBonus}
                  <h4>Saving Throws</h4>
                  {elem.savingThrows}
                  <h4>Features</h4>
                  <table>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Description</td>
                      </tr>
                    </thead>
                    <tbody>
                      {elem.features.map(
                        (
                          feature: { name: string; description: string },
                          index: number
                        ) => (
                          <tr key={index}>
                            <td>{feature.name}</td>
                            <td>{feature.description}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </Option>
        ))}
      </Wrapper>
    </>
  );
};

export default SetCharacterClass;
