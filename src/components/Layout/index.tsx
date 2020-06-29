import React from 'react'

import { Grid } from './styles'
import FollowedChannels from '../FollowedChannels'

const Layout: React.FC = () => {
  return (
    <Grid>
      <FollowedChannels />
    </Grid>
  )
}

export default Layout;