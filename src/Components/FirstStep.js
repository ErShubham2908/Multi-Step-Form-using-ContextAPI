import React, { useContext } from 'react'
import './Style.css'
import { createStore } from './DataStore';

function FirstStep() {
  const {setStep, userData, setUserData} = useContext(createStore);

  return (
    <>
        <div className='pStep'>
          <span>Step 1</span> <hr className='pHr' />
          <span>Step 2</span> <hr className='pHr' />
          <span>Step 3</span>
        </div>
      <div className='pForm pForm1'>
          <form>   
              <label htmlFor='fName'>First Name</label> <br />
              <input type='text' id='fName' autoComplete='true' value={userData['firstname']}  placeholder='Enter Your First Name' onChange={(e) => setUserData({...userData, 'firstname' : e.target.value}) } /> <br />
              <label >Last Name</label><br />
              <input type='text' id='lName' autoComplete='true' placeholder='Enter Your Last Name' value={userData['lastname']} onChange={(e) => setUserData({...userData, 'lastname' : e.target.value}) } /><br />
              {/* <label >Gender</label> <br /> */}
              {/* <input type='radio' id='male' name='gender' value={userData['gender']} onChange={(e) => setUserData({...userData, 'gender' : e.target.value})} />  */}
              {/* <label htmlFor='male' >Male</label>    */}
              {/* <input type='radio' id='female' name='gender' value='Female' />  */}
              {/* <label htmlFor='female' >Female</label> <br />  */}
              <label htmlFor='email'>Email</label> <br />
              <input type='email' id='email' autoComplete='true' placeholder='Enter Your Email' value={userData['email']} onChange={(e) => setUserData({...userData, 'email' : e.target.value}) }  /> <br />
              <label htmlFor='pno'>Phone Number</label> <br />
              <input type='text' id='pno' autoComplete='true' placeholder='Enter Your Phone Number' value={userData['Phone_Number']} onChange={(e) => setUserData({...userData, 'Phone_Number' : e.target.value}) }  /> <br />
              <button onClick={() => setStep(2)}>NEXT</button>
          </form>
      </div>
    </>
  )
}

export default FirstStep;