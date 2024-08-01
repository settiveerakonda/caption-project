import React from 'react'

export default function table({data}) {
  return (
    <div>
      <div className='conatiner'>
          <h1> Enter the elementh1</h1>
    <br />
    <table>
        <thead>
            <tr>
                <th>roll_no</th>
                <th>Name</th>
                <th>collge</th>
                <th>Branch</th>
                <th>Email</th>

                
            </tr>
        </thead>
        <tbody>
            {
                data.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.college}</td>
                    <td>{item.branch}</td>
                    <td>{item.email}</td>

                </tr>
                ))
            }
           
        </tbody>
    </table>
      </div>
    </div>
  )
}
