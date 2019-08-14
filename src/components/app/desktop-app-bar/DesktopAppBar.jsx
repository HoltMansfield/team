import React from 'react'
import Flex from 'flexbox-react'
import { FormattedMessage } from 'react-intl.macro'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
// import { } from './styled'


export function DesktopAppBar () {
  const { isLargeDesktop } = useScreenSizes()

  return (
    <Flex flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          { isLargeDesktop !== true &&
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          }
          <Typography variant="h6" color="inherit" >
            <FormattedMessage
              id="title.teamRealTime"
              defaultMessage="Team real time"
            />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Flex>
  )
}
