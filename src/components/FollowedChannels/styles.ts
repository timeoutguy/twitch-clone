import styled from 'styled-components';

export const Container = styled.div`
  grid-area: FC;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  background-color: #1F1F23;
  max-height: 100vh;
  color: #fff;

  overflow-y: hidden;

  ::webkit-scrollbar{
    display: none;
  }

  p{
    font-weight: lighter;
  }

`;

export const ChannelInfo = styled.div`
  
`;

