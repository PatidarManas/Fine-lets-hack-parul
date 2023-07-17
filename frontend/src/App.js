// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Al from './pages/AL/Al';
import Test from './pages/test/Al';
import Af from './pages/AF/Af';
import Landing from './pages/Landing/Landing';
import Pl from './pages/PL/Pl';
import Pf from './pages/PF/Pf';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Authentication from './pages/Authentication/Authentication';
import Admin from './pages/Admin/Admin';
function App(isadmin=false) {
  const [user,setuser] = useState("loading");
  useEffect(()=>{
    getuser();
  },[])
  async function getuser() {
    const URL="https://fine-backend.onrender.com"
    // const URL="http://localhost:4000"
    const token = document.cookie
    try {
        await axios.post(`${URL}/auth/islogin`, {
            token
        }).then((res) => {
          const {success,newuser} = res.data
          console.log(success)
          if(success==true){
            console.log("entered")
            setuser(newuser)
          }
          else{
            console.log("nentered")
            setuser("not")
          }

        }).catch((error) => {
            alert(error)
        })
    } catch (error) {
        alert(error)
    }
}

  return (
    <Router>
    <Routes>
    
      <Route path={"/login"} element={user=="loading" ? <>Loading</> : user=="not" ? <Login /> : <Dashboard userdetails={user} />}/>
      <Route path={"/dashboard"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Dashboard userdetails={user}/> : <Login/>} />
      <Route path={"/al"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Al user={user}/> : <Login/>} />
      <Route path={"/pl"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Pl user={user}/> : <Login/>} />
      <Route path={"/pf"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Pf user={user}/> : <Login/>} />
      <Route path={"/auth"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Authentication user={user}/> : <Login/>} />
      {/* <Route path={"/test"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Test/> : <Login/>} /> */}
      <Route path={"/af"} element={user=="loading" ? <>Loading</> : user!=="not" ? <Af user={user} /> : <Login/>} />
      {/* <Route path={"/af"} element={<Af/>} /> */}
      <Route path={"/"} element={<Landing/>} />
      <Route path={"/admin"} element={ <Admin/>} />

    </Routes>
  </Router>
  );
}

export default App;
