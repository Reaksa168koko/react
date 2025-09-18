import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Master = () => {
    const users = [
  { id: 1, name: "Alice", gender: "Female" },
  { id: 2, name: "Bob", gender: "Male" },
  { id: 3, name: "Charlie", gender: "Male" },
  { id: 4, name: "Diana", gender: "Female" },
  { id: 5, name: "Ethan", gender: "Male" }
];

  return (
    <BrowserRouter>
        <ul>
           {users.map((iterm)=>(
             <li key={iterm.id}>
                <Link to={`/user/${iterm.id}`}>{iterm.name}</Link>
            </li>
           ))}
        </ul>

        <Routes>
            {users.map((e)=>(
                <Route path={`/user/${e.id}`} element={
                    <div>
                      <h1>nkme:{e.name}</h1>
                      <h1>ID:{e.id}</h1>
                      <h1>Gender: {e.gender}</h1>
                    
                    </div>
                    
                    }/>
            ))}
        </Routes>
    
    </BrowserRouter>
  )
}

export default Master
