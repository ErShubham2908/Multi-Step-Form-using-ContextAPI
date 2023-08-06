import React, { useContext } from 'react'
import { createStore } from './DataStore'

function SecondStep() {
  const {setStep, userData, setUserData} = useContext(createStore)
  return (
    <>
       <div className='pStep'>
          <span className='pStep1'>Completed </span> <hr className='pHr1' />
          <span>Step 2</span> <hr className='pHr' />
          <span>Step 3</span>
        </div>
        <div className='pForm pForm2'>
         <form>   
            <label htmlFor='add'>Address</label> <br />
            <input type='text' id='add' autoComplete='true' placeholder='Opp Gurukul Vihar, 1234/32 Delhi' value={userData['city']} onChange={(e) => setUserData({...userData, 'city' : e.target.value}) }  /> <br />
            <label htmlFor='city'>City / Postal Code</label> <br />
            <input type='text' id='city' autoComplete='true' placeholder='New Delhi - 110001' value={userData['postal_code']} onChange={(e) => setUserData({...userData, 'postal_code' : e.target.value}) }  /> <br />
            <label htmlFor='state'>State</label> <br />
            <input type='text' id='state' autoComplete='true' placeholder='Bihar' value={userData['state']} onChange={(e) => setUserData({...userData, 'state' : e.target.value}) }  /> <br />
            <label htmlFor='pno'>Country / Region</label> <br />
            <input type='text' id='pno' autoComplete='true' placeholder='India (IN)' value={userData['country']} onChange={(e) => setUserData({...userData, 'country' : e.target.value}) }  /> <br />
            <button onClick={()=> setStep(3)}>NEXT</button>
            <button onClick={()=> setStep(1)} className='btnback'>BACK</button>
        </form>
        </div>
    </>
  )
}

export default SecondStep
