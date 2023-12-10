import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "./useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page flex flex-col items-center justify-center h-screen">
      <p className="mb-5 text-lg">Sign In with your Google account</p>
      <button
        className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-black after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
        onClick={signInWithGoogle}
      >
        Sign In
      </button>
    </div>
  );
};
