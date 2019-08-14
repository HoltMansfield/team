import React from 'react'
import Flex from 'flexbox-react'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
// import { } from './styled'


export function SideMenu () {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText inset primary="Sent mail" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText inset primary="Drafts" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText inset primary="Inbox" />
      </MenuItem>
    </MenuList>
  )
}
