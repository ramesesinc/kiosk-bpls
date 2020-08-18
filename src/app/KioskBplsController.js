import React, { useState, useEffect } from 'react'
import { Page, Panel } from 'rsi-react-web-components'
import HomeScreen from './home'
import PayScreen from './pay'
import RenewalScreen from './renewal'

const BplsWebController = (props) => {
  const [page, setPage] = useState('home')

  const onComplete = (args) => {
    props.history.goBack()
  }

  const onCancel = (type) => {
    if (type) {
      setPage(type)
    } else {
      props.history.goBack()
    }
  }

  const onSelectType = (type) => {
    setPage(type)
  }

  const screenProps = { onComplete, onCancel }

  return (
    <Panel style={styles.container}>
      <Panel visibleWhen={page === 'home'}>
        <HomeScreen {...props} {...screenProps} onSelectType={onSelectType} />
      </Panel>

      <Panel visibleWhen={page === 'pay'}>
        <PayScreen {...props} {...screenProps} />
      </Panel>

      <Panel visibleWhen={page === 'renewal'}>
        <RenewalScreen {...props} {...screenProps} />
      </Panel>
    </Panel>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}

export default BplsWebController
