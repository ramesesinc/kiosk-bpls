import React, { useState } from 'react'
import { Content, Button, Panel, FormPanel, Number, Subtitle, ActionBar, Text } from 'rsi-react-web-components'

const Billing = ({ movePrevious, onComplete }) => {
  const [entity, setEntity] = useState({})
  return (
    <Content center>
      <Subtitle>This is only an estimated amount. Your gross income will still be verified by the treasurers office</Subtitle>
      <FormPanel context={entity} handler={setEntity}>
        <Number caption="Tax" name="tax" />
        <Number caption="Surcharge" name="surcharge" />
        <Number caption="Discount" name="discount" />
        <Number caption="TOTAL" name="total" />
      </FormPanel>
      <br />
      <ActionBar>
        <Button className="navButton" caption='Back' action={movePrevious} />
        <Button className="navButton" caption='Submit' action={() => onComplete({})} />
      </ActionBar>
    </Content>
  )
}

export default Billing
