import { useState } from 'react';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContex } from './Context/AuthContext/AuthProvider';
import { routes } from './Routes/Routes/Routes';



function App() {
  const {them}=useContext(AuthContex)
  
  
  return (
    <div className={` ${them}`}>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
