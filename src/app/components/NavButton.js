import React from 'react'
import { Button, Panel, Subtitle, ActionBar } from 'rsi-react-web-components'




const NavButton = ({movePrevious, onComplete}) => {
  return (
    <Panel>
      <ActionBar>
        <center>
          <Button className="navButton" caption='Back' action={movePrevious} />
          <Button className="navButton" caption='Submit' action={() => onComplete({})} />
        </center>
      </ActionBar>
    </Panel>
  )
}

export default NavButton

