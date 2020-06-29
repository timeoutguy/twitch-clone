import styled from 'styled-components';

import { Props } from '.'

export const Channel = styled.div<Props>`
  padding: 6px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: space-evenly;

  width: 240px;
  height: 42px;

  cursor: pointer;

  &:hover{
    background-color: #26262C;
  }

  img{
    border-radius: 50%;
  }

  .info{
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
    width: 100%;
  }

  .channel{
    font-size: 14px;  
    font-weight: 600;
  }

  .game{
    font-size: 14px;
    color: #adadb8;
    font-weight: 300;
  }

  .stats{
    display: flex;
    flex-direction: row;
    

    p{
      color: #C1C1C6; 
      font-size: 12px;
      padding: 0px 5px;
    }
    div{
      background-color: #e91916;
      width: 10px;
      vertical-align: baseline; 
      height: 10px;
      border-radius: 50%;
    } 
  }

  
`;
