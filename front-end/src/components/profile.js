import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Login from "./login";
import logo from "./logo1.jpg";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [logout, setLogout] = useState(true);
  const [loading, setLoading] = useState(true); 
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        setLoading(true);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        }
      }
      setLoading(false);
      console.log("User not logged in !");
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      setUserDetails(null);
      setLogout(true);
      setLoading(true);

      await auth.signOut();
      console.log("User logged out successfully!");

      setLoading(false);
    } catch (error) {
      console.error("Error logging out:", error.message);
      setLoading(false);
    }
  }


  if (loading) {
    return (
      <div className="flex items-center justify-center bg-gray-100 h-[25rem] w-[19rem] text-black rounded-3xl shadow-xl shadow-gray-400">
        <div className="flex items-center gap-4">
          <p className="text-black font-medium text-2xl">Loading...</p>
          {/* Spinner */}
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }


  return (
    <div>
      {userDetails ? (
        <>
          <div className="bg-gray-100 h-[25rem] w-[19rem] text-black rounded-3xl shadow-xl shadow-gray-400">
            <div className="flex mt-1 ml-8 w-60">
              <span className="text-3xl font-bold text-black">EagleView</span>
              <div>
                <img src={logo} className="h-8 ml-2" />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={userDetails.photo}
                  width={"40%"}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3 className="mx-8 mt-2 font-semibold text-lg">
                Welcome {userDetails.firstName} 🙏🙏
              </h3>
              <div className="mx-10 mt-2">
                <p>Email: {userDetails.email}</p>
                <p>Name: {userDetails.firstName}</p>
                {/* <p>Last Name: {userDetails.lastName}</p> */}
              </div>
              <button
                className="mt-2 flex items-center justify-center h-7 w-48 bg-blue-600 rounded-lg text-white mx-8"
                onClick={handleLogout}
              >
                <div type="submit" className="btn btn-primary ">
                  <span className="flex items-center justify-center">
                    Sign Out
                  </span>
                </div>
              </button>
            </div>
          </div>
        </>
      ) : logout ? (
        <div>
          <Login />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Profile;
