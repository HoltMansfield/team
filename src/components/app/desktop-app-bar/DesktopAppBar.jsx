import React from 'react'
import Flex from 'flexbox-react'
import { FormattedMessage } from 'react-intl.macro'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { useLoggedInUser } from 'hooks/redux/foundation/use-logged-in-user/useLoggedInUser'
import { useFirebaseUserAdmin } from 'hooks/firebase/use-firebase-user-admin/useFirebaseUserAdmin'
// import { } from './styled'


export function DesktopAppBar () {
  const { isLargeDesktop } = useScreenSizes
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { loggedInUser } = useLoggedInUser()
  const { logout } = useFirebaseUserAdmin()

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeUserMenu = () => {
    setAnchorEl(null)
  }

  const doLogout = () => {
    closeUserMenu()
    logout()
  }

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
          { loggedInUser &&
            <Flex marginLeft="auto">
              <IconButton color="inherit" aria-label="Account Menu" onClick={handleUserMenuClick}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeUserMenu}
              >
                <MenuItem onClick={doLogout}>Logout</MenuItem>
              </Menu>
            </Flex>
          }
        </Toolbar>
      </AppBar>
    </Flex>
  )
}
