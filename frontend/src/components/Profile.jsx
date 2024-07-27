import React from 'react';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-6xl">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 lg:mb-0 lg:w-1/4 border-t-4 border-indigo-500 ">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full"
                src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=1024x1024&w=is&k=20&c=YYtJJGvb4uXz9Ni9coUC8xitkbZFjp9qlwFR61g_koM="
                alt="Profile"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Amit Kumar</h3>
              <p className="text-sm text-gray-500">@amit_t</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-4">
            <p className="text-gray-800">Software Developer based in Noida.</p>
          </div>

          {/* Profile Stats */}
          <div className="mt-4 flex justify-around">
            <div className="text-center">
              <p className="text-gray-700 font-bold">500</p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-bold">30</p>
              <p className="text-gray-500 text-sm">Following</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-bold">100</p>
              <p className="text-gray-500 text-sm">Posts</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Edit Profile</button>
          </div>
        </div>

        {/* Gallery */}
        <div className="lg:w-3/4 ">
        <div>
        <h3 className="text-xl font-bold text-gray-900">Posts</h3>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
            <img
              className="w-full h-48 object-cover rounded-md"
              src="https://static.theprint.in/wp-content/uploads/2022/12/ANI-20221221105705.jpg"
              alt="Post"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
