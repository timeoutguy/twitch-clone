import React from 'react'

import { Channel } from './styles';

export interface Props {
  channelName: string;
  game: string;
  viewers: number;
}

const ChannelInfo: React.FC<Props> = ({
  channelName,
  game,
  viewers
}) => {
  return (
    <Channel
      channelName={channelName}
      game={game}
      viewers={viewers}
    >
      <img src="https://via.placeholder.com/30" />

      <div className="info">
        <p className="channel">{channelName}</p>
        <p className="game">{game}</p>
      </div>

      <div className="stats">
        <div className="live-indicator"></div>
        <p> {viewers} </p>
      </div>

    </Channel>
  )
}

export default ChannelInfo
