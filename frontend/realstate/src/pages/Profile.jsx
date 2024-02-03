import{useSelector} from "react-redux"

export default function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className="mt-8 max-w-lg mx-auto px-3 flex flex-col justify-center items-center gap-2">
      <h1 className="text-center font-bold text-3xl">Profile</h1>
      <img src={currentUser.avatar} alt="profile" className="rounded-full h-20 w-20 object-cover "/>
      <form >
        <input placeholder="username" type="text" className="p-3 my-1 rounded-lg w-[100%] " />
        <input placeholder="email" type="text" className="p-3 my-1 rounded-lg w-[100%] " />
        <input placeholder="password" type="text" className="p-3 my-1 rounded-lg w-[100%] " />
      </form>
      <button className="bg-slate-700 text-white w-[100%] p-3 rounded-lg hover:opacity-85 ">Update</button>
      <div className="p-3 text-red-700 font-semibold  w-[100%] flex justify-between">
        <span className="hover:cursor-pointer">Delete Account</span>
        <span className="hover:cursor-pointer">log out</span>
      </div>
    </div>
  )
}
