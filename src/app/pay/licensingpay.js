import React, { useState } from 'react'
import { FormPanel, Content, Button, Panel, Subtitle, ActionBar, Text } from 'rsi-react-web-components'

const LicensingPay = ({ moveNext, movePrevious }) => {

  const [entity, setEntity] = useState({
    bin: "B12323123-2312", type: "Renewal", year: "2019", qtr: "4",
    tradename: "1972 Jan 20", amountdue: "1,800.00"
  });

  return (
    <Content center>
      <Panel center>
        <FormPanel context={entity} handler={setEntity}>
          <Panel row>
            <Text name="bin" caption="BIN" editable={false} />
            <Text name="type" caption="Type" editable={false} />
            <Text name="year" caption="Year" editable={false} />
            <Text name="qtr" caption="Qtr" editable={false} />
          </Panel>
          <Panel row>
            <Text name="tradename" caption="Trade Name" editable={false} />
            <Text name="amountdue" caption="Amount Due" editable={false} />
          </Panel>
        </FormPanel>
        <br />
      </Panel>
      <ActionBar>
        <Button className="navButton" caption='Back' action={movePrevious} />
        <Button className="navButton" caption='Next' action={() => moveNext({})} />
      </ActionBar>
    </Content >
  )
}

export default LicensingPay
