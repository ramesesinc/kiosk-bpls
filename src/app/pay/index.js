import React, { useState, useEffect } from 'react'
import { Title, Panel } from 'rsi-react-web-components'

import PermitPay from './permitpay'
import LicensingPay from './licensingpay'
import Income from './income'
import Billing from './billing'

const steps = [
  { name: 'permitpay', title: 'Business Permit > Pay', component: PermitPay },
  { name: 'licensingpay', title: 'Business Licensing > Pay', component: LicensingPay },
  { name: 'income', title: 'Income', component: Income },
  { name: 'billing', title: 'Billing', component: Billing }
]

const PayScreen = ({ onCancel, onComplete, ...rest }) => {
  const [step, setStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(steps[0])
  const PageComponent = currentStep.component

  useEffect(() => {
    setCurrentStep(steps[step]);
  }, [step]);

  const moveNext = (params) => {
    if (step + 1 !== steps.length) {
      setStep(step + 1);
    }
  }

  const movePrevious = () => {
    if (step - 1 >= 0) {
      setStep(step - 1);
    }
  }

  const pageProps = { moveNext, movePrevious, onCancel, onComplete }

  return (
    <Panel>
      <h1 className="header-menu">Business Permit</h1>
      <PageComponent step={currentStep} {...rest} {...pageProps} />
    </Panel>
  )
}

export default PayScreen
