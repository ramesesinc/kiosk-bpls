import React, { useState } from 'react'
import { Button, Content, Panel, Number, FormPanel, Text, Subtitle, ActionBar, Input } from 'rsi-react-web-components'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const Income = ({ movePrevious, moveNext }) => {
  const [entity, setEntity] = useState({})
  const [value, setValue] = useState();

  return (
    <Content center>
      <Subtitle>Please verify if personal info is correct</Subtitle>
      <p>Gross Income From</p>
  <p>value {value}</p>
      <FormPanel context={entity} handler={setEntity}>
        <Number caption="Salary" name="salary" value={value}/>
        <Number caption="Business" name="businessgross" />
        <Number caption="Real Property" name="property" />
      </FormPanel>
      <br />
      <Keyboard
        onChange={setValue}
        layout={{
          default: [
            "1 2 3",
            "4 5 6",
            "7 8 9",
            " 0 {bksp}"
          ]
        }}
        display={{
          '{bksp}': 'X',
        }}
      />
      <br/>
      <ActionBar>
        <Button className="navButton" caption='Back' action={movePrevious} />
        <Button className="navButton" caption='Next' action={() => moveNext({})} />
      </ActionBar>
    </Content>
  )
}

export default Income
