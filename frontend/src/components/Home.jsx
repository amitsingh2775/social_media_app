import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userLogin } from '../store/selectors/isLogin';

// const getToken=()=>{
//   const token = localStorage.getItem('token');
//   return token;
// }

function Home() {

   const navigate=useNavigate()
   const isLogin=useRecoilValue(userLogin)

  useEffect(()=>{
    // const token=getToken();
    // if(!token){
    //  navigate('/signin')
    // }
      if(!isLogin){
        navigate('/signin')
      }
  },[])
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Card */}
      <div className="max-w-sm w-full bg-white shadow-lg rounded-xl p-6">
        {/* Card Header */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=1024x1024&w=is&k=20&c=YYtJJGvb4uXz9Ni9coUC8xitkbZFjp9qlwFR61g_koM="
              alt="Profile"
            />
          </div>
          <div>
            <h5 className="text-lg font-semibold text-gray-900">Amit Kumar</h5>
            <p className="text-sm text-gray-500">@amit_t</p>
          </div>
        </div>

        {/* Card Post Image */}
        <div className="mt-4">
          <img
            className="w-full rounded-lg"
            src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
            alt="Post"
          />
        </div>

        {/* Post Content: Like, Comment, Share */}
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-red-500 cursor-pointer">favorite</span>
            <p className="text-gray-600">700k Likes</p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-gray-600 cursor-pointer">comment</span>
            <p className="text-gray-600">20 Comments</p>
          </div>
        </div>


        {/* Add Comment */}
        <div className="mt-4 flex items-center space-x-2">
          <span className="material-symbols-outlined">add_reaction</span>
          <input
            type="text"
            placeholder="Write a comment"
            className="flex-grow p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
