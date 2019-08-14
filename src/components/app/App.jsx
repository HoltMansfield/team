import React from 'react'
import Flex from 'flexbox-react'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
import { RouteTable } from '../routes/RouteTable'
import { DesktopAppBar } from './desktop-app-bar/DesktopAppBar'
import { SideMenu } from './side-menu/SideMenu'



export function App () {
  const { isDevice, isLargeDesktop } = useScreenSizes()

  if (isDevice) {
    return (
      <Flex flexGrow={1}>
        <RouteTable />
      </Flex>
    )
  }

  if (isLargeDesktop) {
    return (
      <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
        <Flex>
          <DesktopAppBar />
        </Flex>
        <Flex flexGrow={1}>
          <Flex width="200px">
            <SideMenu />
          </Flex>
          <Flex flexGrow={1}>
            <RouteTable />
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Flex>
        <DesktopAppBar />
      </Flex>
      <Flex>
        <RouteTable />
      </Flex>
    </Flex>
  )
}
