import { ReactNode } from "react";
import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Table = styled.table`
  width: 100%;
  tbody tr td:first-child {
    font-weight: bold;
  }
  thead {
    background: rgba(0, 0, 0, 0.06);
    td {
      padding: 0 10px;
    }
  }
  tbody td {
    padding: 0 15px;
  }
  p,
  ul,
  li {
    margin: 0;
  }
`;

const Feats = () => {
  const { features } = useCharacterDetails();
  return features ? (
    <Table>
      <thead>
        <tr>
          <td style={{ width: "25%" }}>Skill</td>
          <td style={{ width: "75%" }}>Description:</td>
        </tr>
      </thead>
      <tbody>
        {features &&
          features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.name}</td>
              <td>{feature.description}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  ) : null;
};

export default Feats;
