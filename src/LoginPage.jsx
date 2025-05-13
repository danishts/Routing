// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         setError("Please verify your email before logging in.");
//         return;
//       }

//       alert("Login successful!");
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel with Image or Branding */}
     

//       {/* Right Panel with Form */}
//       <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50 p-8">
//         <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//             Welcome Back
//           </h2>
//           <form onSubmit={handleLogin} className="space-y-5">
//             {error && (
//               <p className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm">
//                 {error}
//               </p>
//             )}
//             <div>
//               <label className="block text-gray-700 text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-center text-sm mt-6 text-gray-600">
//             Don’t have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-blue-600 hover:underline font-medium"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
//varify email code


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Laptop from "./assets/laptop.jpg"; // Adjust the path as necessary
import { auth } from "./firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Image/Branding */}
      <div className="hidden md:flex w-1/2 bg-blue-100 justify-center items-center">
        <img
          src={Laptop}
          alt="Login Illustration"
          className="w-3/4 max-w-md"
        />
      </div>

      {/* Right Side Login Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50 p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
