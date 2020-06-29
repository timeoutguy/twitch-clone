import React from 'react'

import { Grid } from './styles'
import FollowedChannels from '../FollowedChannels'
import Content from '../Content'

const Layout: React.FC = () => {
  return (
    <Grid>
      <FollowedChannels />
      <Content />
    </Grid>
  )
}

export default Layout;