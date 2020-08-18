import React from 'react'
import { Button, Panel, ActionBar, Text } from 'rsi-react-web-components'



const PermitPay = ({ movePrevious, moveNext })  => {
  return (
    <Panel>
      <ActionBar center>
        <center>
          <h2>Scan QR Code or Enter BIN</h2>
          
          <Text />
          <br />
          <Button className="navButton" caption='Back' action={movePrevious}>Back</Button>
          <Button className="navButton" action={() => moveNext({})} >Go</Button>
        </center>
      </ActionBar>
    </Panel>
  )
}

export default PermitPay
