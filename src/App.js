import React from 'react';
import ReactDOM from "react-dom/client";

import { HashRouter, Route, Routes } from "react-router-dom";
import BackendHome from './Backend/Layouts/BackendHome';
import BackendLayout from './Backend/Layouts/BackendLayout';
import AllUsers from './Backend/Pages/UserManagement/AllUsers';
import UsersLayout from './Backend/Pages/UserManagement/UsersLayout';
import FrontendLayouts from './Frontend/Layouts/FrontendLayouts';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={< FrontendLayouts />}>
        </Route>

        <Route path='dashboard' element={< BackendLayout />}>
          <Route path='user' element={< UsersLayout />}>
            <Route path='allusers' element={<AllUsers />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
};

export default App;

