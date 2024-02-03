import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice"
import OAuth from "../components/OAuth";


export default function SignIn() {

  const navigate=useNavigate()
  const [formData, setFormData] = useState()
  // const [error,setError]=useState(null)
  // const [loading, setLoading ] = useState(false)
  const {loading ,error }=useSelector((state)=>state.user)
  const dispatch=useDispatch()


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try{

      dispatch(signInStart())
      const res=await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data=await res.json()
      if(data.success===false){
       dispatch(signInFailure(data.message))
        return
      }
     dispatch(signInSuccess(data))
      navigate("/")
    }catch(err){
      dispatch(signInFailure(err.message))
    }
    // console.log(data.message)
  }

  return (
    <div className="px-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold my-7 text-2xl">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
          {loading?"loading..":"sign In"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-8">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-800 font-medium underline cursor-pointer">
            create account
          </span>
        </Link>
      </div>
      <p className="text-red-700">{error}</p>
    </div>
  );
}
