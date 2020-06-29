import styled from 'styled-components';

export const Container = styled.div`
  grid-area: LS;
  display: flex;
  flex-direction: column;
  align-items:center;
  max-height: 100vh;

  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`;
