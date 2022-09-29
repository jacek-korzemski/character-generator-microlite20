import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Wrapper = styled.div`
  table {
    width: 100%;
  }
  thead {
    tr {
      background: rgba(0, 0, 0, 0.06);
      font-weight: bold;
    }
  }
  tbody,
  thead {
    td {
      text-align: center;
      padding: 0 4px;
    }
  }
  tbody {
    td {
      font-size: 24px;
    }
  }
`;

const Skills = () => {
  const { skills } = useCharacterDetails();

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <td>Communication</td>
            <td>Knowledge</td>
            <td>Physical</td>
            <td>Subterfuge</td>
            <td>Survival</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{skills?.communication}</td>
            <td>{skills?.knowledge}</td>
            <td>{skills?.physical}</td>
            <td>{skills?.subterfuge}</td>
            <td>{skills?.survival}</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Skills;
