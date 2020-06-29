import styled from 'styled-components';

// FC - Followed Channels
// LS - Live Stream 
// CH - Chat


export const Grid = styled.div`
  display: grid;

  grid-template-columns: 240px 1340px 340px;
  grid-template-rows: auto;

  grid-template-areas: 'FC LS CH';

  height: 100vh; 
`