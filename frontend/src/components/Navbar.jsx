import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
//import Cookies from 'js-cookie';

import { useRecoilValue } from 'recoil';
import { userLogin } from '../store/selectors/isLogin';

// const getToken=()=>{
//   const token = localStorage.getItem('token');
//   return token;
// }
// const getToken = () => {
//   const token = Cookies.get('token');
//   return token;
// }

function Navbar() {

   const isLogin=useRecoilValue(userLogin)
//  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//    const token=getToken()
//    if(token){
//      console.log("token is->",token);
//      setIsAuthenticated(true)
     
//    }
//    else{
//     console.log("token is Not found->",token);
//     setIsAuthenticated(false)
     
//    }
//   }, []);
  

  
  return (
    <div className='flex justify-around shadow-custom p-4'>
        <Link to="/">Duniya</Link>

        <ul className='flex'>
        { !isLogin ?(
          <>
          <li  className='px-4 py-15'>
          <Link to="/signup">Signup</Link>
              </li>
          <li className='px-4 py-15'>
          <Link to="/signin">Signin</Link>
          </li>
          </>
        ) :(
          <>
          <li className='px-4 py-15'>
          <Link to="/profile">Profile</Link>
          </li>
          <li className='px-4 py-15'>
          <Link to="/post-create">Create</Link>
          </li>
          </>
        )
        }
            
        </ul>
    </div>
  )
}

export default Navbar