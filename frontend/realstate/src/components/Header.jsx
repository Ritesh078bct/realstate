import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"


export default function Header() {

    const {currentUser}=useSelector(state=>state.user)
  return (
    <header className="bg-slate-200 shadow-md p-3">
        <div className="md:max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/">
        <h1 className="font-bold text-lg sm:text-3xl">
            <span className="text-slate-500">ritesh</span>
            <span className="text-slate-700">SAHANI</span>
        </h1>
        </Link>
        <form className="w-24 sm:w-64 flex items-center  bg-slate-100 p-3 rounded-lg">
            <input type="text" placeholder="search.." className="bg-transparent focus:outline-none w-[80%] sm:w-[90%]" />
            <FaSearch className="text-slate-600 w-[20%] sm:w-[10%]"/>
        </form>
        <ul className="flex justify-between items-center gap-4">
            <Link to="/"> 
            <li className="text-blue-950 font-semibold hover:underline hover:cursor-pointer hidden sm:inline">Home</li>
            </Link>
            <Link to="/about">
                <li className="text-blue-950 font-semibold hover:underline hover:cursor-pointer hidden sm:inline">About</li>
            </Link>
            <Link to="/profile">
                {currentUser?(
                    <img className="rounded-full w-7 h-7 object-cover" src={currentUser.avatar} alt="profile"/>
                ):(

                    <li className="text-blue-950 font-semibold hover:underline hover:cursor-pointer">Sign In</li>
                )}
            </Link>
        </ul>
        </div>
    </header>
  )
}
