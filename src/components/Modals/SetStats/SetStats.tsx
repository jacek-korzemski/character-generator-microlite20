import styled from "styled-components";
import useModal from "src/hooks/useModal";
import Random from "src/components/Modals/SetStats/Random";

const Wrapper = styled.div`
  position: relative;
  width: 720px;
  max-width: 720px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const SetStats = () => {
  const { setContent } = useModal();

  return (
    <>
      <Top>
        <span>Select Stats</span>
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
        <Random />
      </Wrapper>
    </>
  );
};

export default SetStats;
