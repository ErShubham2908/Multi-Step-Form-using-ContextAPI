import React, { createContext, useState } from 'react'
import DisplayCompo from './DisplayCompo';

export const createStore = createContext();

function DataStore() {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [storeData, setStoreData] = useState([]);

    const handleSubmit = () => {
      setStoreData(storeData => [...storeData, userData]);
      setUserData('');
      setStep(1)
  }
  return (
    <createStore.Provider value={{currentStep, setStep, userData, setUserData, storeData, setStoreData, handleSubmit}}>
        <DisplayCompo />
    </createStore.Provider>
  )
}

export default DataStore