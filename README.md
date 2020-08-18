import React from 'react'

export default function TableBody({users}) {

    console.log(users[0].name.first)
    return (
        <div>
            {users.map(user => {
                // return <h1>{user.name.first}</h1>
                
            })
            }
        </div>
    )

}





















// <tr>
                //     <td>
                //         <img src={users.picture.large} />
                //     </td>
                //     <td>
                //         {users.name.first} {user.name.last}
                //     </td>
                //     <td>
                //         {users.phone}
                //     </td>
                //     <td>
                //         {users.email}
                //     </td>
                //     <td>
                //         {users.dob.date}
                //     </td>
                // </tr>