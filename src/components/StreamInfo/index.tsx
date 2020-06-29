import React from 'react'

import { Container, Infos, Avatar } from './styles';

const Player: React.FC = () => {
  return (
    <Container>
      <Infos>
        <div>
          <Avatar src="https://via.placeholder.com/64" />
        </div>
        <div>
          <p> Timeoutguy </p>
          <p> Codando um clone da twitch.tv </p>
          <p> Science and thecnology </p>
        </div>
      </Infos>
    </Container>
  )
}

export default Player
