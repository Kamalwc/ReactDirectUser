import React from 'react'
import "./css/TableBody.css"

export default function TableBody({ users }) {

    return (
        <div>
            {users[0] !== undefined && users[0].name !== undefined ?
                users.map(user => {
                    return( 
                        <tr>
                            <td style={{paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={user.picture.large} style={{ width: "80%" , height: "80%"}}/>
                            </td>
                            <td style={{paddingTop: "10px", paddingBottom: "10px", fontSize: "1.3em"}}>
                                {user.name.first} {user.name.last}
                            </td>
                            <td style={{paddingTop: "10px", paddingBottom: "10px" , fontSize: "1.3em"}}>
                                {user.phone}
                            </td>
                            <td style={{paddingTop: "10px", paddingBottom: "10px", fontSize: "1.3em"}}>
                                {user.email}
                            </td>
                            <td style={{paddingTop: "10px", paddingBottom: "10px" , fontSize: "1.3em"}}>
                                {user.dob.date}
                            </td>
                        </tr>
                    )
                }) : (<></>)
            }
        </div>
    )

}





















