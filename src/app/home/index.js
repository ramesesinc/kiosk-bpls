import React from 'react'
import { Page, Panel, Title, Button, ActionBar } from 'rsi-react-web-components'

const HomeScreen = ({ onCancel, onSelectType }) => {
  return (
    <Panel>
       <h1 className="header-menu">Select Cedula Type</h1>
      <ActionBar center>
        <Button className="btn-menu" caption='Apply New' action={() => onSelectType('apply')} />
        <Button className="btn-menu" caption='Renewal' action={() => onSelectType('renewal')} />
        <Button className="btn-menu" caption='Pay' action={() => onSelectType('pay')} />
        <Button caption='Cancel' variant='text' action={() => onCancel(null)} />
      </ActionBar>
    </Panel>
  )
}

export default HomeScreen
