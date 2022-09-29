import styled from "styled-components";
import useCharacterDetails from "src/hooks/useCharacterDetails";

const Wrapper = styled.div`
  table {
    width: 100%;
    td {
      padding: 0 8px;
    }
    thead {
      tr {
        background: rgba(0, 0, 0, 0.06);
      }
    }
  }
`;

const Equipement = () => {
  const { equipement } = useCharacterDetails();

  return (
    <Wrapper>
      {equipement && equipement.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Item</td>
            </tr>
          </thead>
          <tbody>
            {equipement.map((elem, index) => (
              <tr key={index}>
                <td>{elem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default Equipement;
