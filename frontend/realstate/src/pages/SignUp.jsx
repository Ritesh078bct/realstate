import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import OAuth from "../components/OAuth";
export default function SignUp() {

  const navigate=useNavigate()
  const [formData, setFormData] = useState()
  const [error,setError]=useState(null)
  const [loading, setLoading ] = useState(false)



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    const res=await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const data=await res.json()
    if(data.success===false){
      setError(data.message)
      setLoading(false)
      return
    }
    setError(null)
    setLoading(false)
    navigate("/sign-in")
    // console.log(data.message)
  }

  return (
    <div className="px-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold my-7 text-2xl">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="px-2 py-3  rounded-lg focus:outline-none"
          placeholder="username.."
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          className="px-2 py-3  rounded-lg focus:outline-none"
          placeholder="email.."
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="px-2 py-3 rounded-lg focus:outline-none"
          placeholder="password.."
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-600 text-white px-2 py-3  rounded-lg">
          {loading?"loading..":"sign up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-8">
        <p>already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-800 font-medium underline cursor-pointer">
            login
          </span>
        </Link>
      </div>
      <p className="text-red-700">{error}</p>
    </div>
  );
}
