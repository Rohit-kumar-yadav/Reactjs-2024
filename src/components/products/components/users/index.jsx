import React, { useEffect } from "react";

const { useState } = React;

export default function Users() {
  const [userList, setUserList] = useState([]);

  async function fetchAllUsers() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const userData = await apiResponse.json();
    
      if(userData?.users){
        setUserList(userData?.users);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchAllUsers();
  },[])

//   console.log(userList);

  return(
    <>
     <ul>
       {userList.map((user)=>{
        return <p key={user.id}>{user.firstName} {user.lastName}</p>
        
       })}
     </ul>
    </>
  )
  
}
