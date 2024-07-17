import NoteContext from "./noteContext";
import { useState } from "react";

const UserState = (props) => {
  const host = "https://inotepad-backend-ruyk.onrender.com"
  const userInitial = {}
  const [user, setUser] = useState(userInitial)

  // Get all Notes
  const getUser = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    if(json.success){
        setUser(json.user)
    }
  }

  return (
    <NoteContext.Provider value={{ user, getUser }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default UserState;