import React from 'react'

import { Container } from './styles';
import Player from '../Player'
import StreamInfo from '../StreamInfo'

const Content: React.FC = () => {
  return (
    <Container>
      <Player />
      <StreamInfo />
    </Container>

  )
}

export default Content
