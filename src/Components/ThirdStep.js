import React, { useContext } from 'react'
import { createStore } from './DataStore'

function ThirdStep() {
  const {setStep, userData, setUserData, handleSubmit} = useContext(createStore)
  return (
    <>
       <div className='pStep'>
          <span  className='pStep1'>Completed</span> <hr className='pHr1' />
          <span  className='pStep1'>Completed</span> <hr className='pHr1' />
          <span>Step 3</span>
        </div>
      <div className='pForm pForm3'>
        <form>   
            <label htmlFor='course'>Course</label> <br />
            <input type='text' id='course' autoComplete='true' placeholder='B.tech' value={userData['course']} onChange={(e) => setUserData({...userData, 'course' : e.target.value}) }  /> <br />
            <label htmlFor='year'>Year</label> <br />
            <input type='number' id='year' autoComplete='true' placeholder='2023' value={userData['year']} onChange={(e) => setUserData({...userData, 'year' : e.target.value}) }  /> <br />
            <label htmlFor='ncollege'>Name of College</label> <br />
            <input type='text' id='ncollege' autoComplete='true' placeholder='IIT Delhi' value={userData['college_Name']} onChange={(e) => setUserData({...userData, 'college_Name' : e.target.value}) }  /> <br />
            <label htmlFor='c_city'>College City</label> <br />
            <input type='text' id='c_city' autoComplete='true' placeholder='Delhi' value={userData['college_city']} onChange={(e) => setUserData({...userData, 'college_city' : e.target.value}) }  /> <br />
            <button type='button'  onClick={handleSubmit}>SUBMIT</button>
            <button onClick={() => setStep(2)} className='btnback'>BACK</button>
        </form>
    </div>
    </>
  )
}

export default ThirdStep
