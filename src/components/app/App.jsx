import React from 'react'
import Flex from 'flexbox-react'
import {useMedia} from 'use-media'
import Grid from '@material-ui/core/Grid'
import { RouteTable } from '../routes/RouteTable'



export function App () {
  // below 1280 is device
  const isDevice = useMedia({ maxWidth: 1279 })
  // smallish desktop between 1280 and 1440
  const isDesktop = useMedia({ minWidth: 1280, maxWidth: 1439 })
  // large isDesktop is 1440 and up
  const isLargeDesktop = useMedia({ minWidth: 1640 })

  console.log(isDevice)

  if (isDevice) {
    return (
      <Flex flexGrow={1}>
        <RouteTable />
      </Flex>
    )
  }

  if (isLargeDesktop) {
    return (
      <Flex>
        <Flex width="200px" style={{ backgroundColor: 'red' }}>
          side menu
        </Flex>
        <Flex flexGrow={1}>
          <RouteTable />
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex flexGrow={1}>
      <RouteTable />
    </Flex>
  )
}
