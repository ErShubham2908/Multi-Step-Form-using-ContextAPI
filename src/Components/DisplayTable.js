import { useContext } from "react"
import { createStore } from "./DataStore"

export const DisplayTable = () => {
    const {storeData} = useContext(createStore)
    return(
      <>
        <div className='pTablle'>
           <table>
             <thead>
               <tr>
                 <th>S No</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Email</th>
                 <th>Contact No</th>
                 <th>Address</th>
                 <th>City / Pin code</th>
                 <th>State</th>
                 <th>Country</th>
                 <th>Course</th>
                 <th>Year</th>
                 <th>College</th>
                 <th>College City</th>
               </tr>
             </thead>
             <tbody>
               {storeData.map((item, index) => {
                 return(
                   <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{item.firstname}</td>
                     <td>{item.lastname}</td>
                     <td>{item.email}</td>
                     <td>{item.Phone_Number}</td>
                     <td>{item.city}</td>
                     <td>{item.postal_code}</td>
                     <td>{item.state}</td>
                     <td>{item.country}</td>
                     <td>{item.course}</td>
                     <td>{item.year}</td>
                     <td>{item.college_Name}</td>
                     <td>{item.college_city}</td>
                   </tr>
                 )
               })}
             </tbody>
           </table>
            </div>
      </>
    )
  }