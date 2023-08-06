import React, { useContext } from 'react'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import { createStore } from './DataStore';
import './Style.css'
import { DisplayTable } from './DisplayTable';

function DisplayCompo() {
  const {currentStep, storeData } = useContext(createStore)
    const switchCompo = (currentStep) => {
      console.log(currentStep);
      switch (currentStep) {
        case 1: return <FirstStep />
        case 2: return <SecondStep/>
        case 3: return <ThirdStep/>
    }
    }
    return (
      <>
      {switchCompo(currentStep)}  
      {storeData.length >= 1 && <DisplayTable />}
    </>
  )
}

export default DisplayCompo;