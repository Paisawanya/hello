// import type { NextPage } from 'next' 

const Home = () => {
  return (
    <>
      <body >
        <div className="w-12/12 h-18    rounded-2xl m-3 p-0 border-8 border-indigo-800">

          <ul className=" text-red-800">

            <li className="mr-2 border-2 border-green-600">
              <a className="hover:text-blue-800  rounded m-3" href="#">Help Center</a>
            </li>
            <li className="mr-2">
              <a className="hover:text-blue-800   rounded m-3" href="#">My Library</a>
            </li>
            <li className="mr-2">
              <a className="hover:text-blue-800   rounded m-3" href="#">Blog</a>
            </li>
            <li className="mr-2">
              <a className="hover:text-blue-800    rounded m-3" href="#">About Us</a>

            </li>
          </ul>
        </div>
        <div className="flex  items-center justify-center min-h-screen border-2 w-full">
          <label className="mb-3 font-normal text-center text-3xl">Log In</label>
          <div className="text-slate-500 w-96">
            <label className="block mb-4">
              <div className="mb-1 text-grey-darkest">Email</div>
              <input className="w-full py-2 px-3 border rounded outline-none focus:border-blue-light focus:shadow-outline" type="text" />
            </label>
            <label className="block mb-5">
              <div className="mb-1 text-grey-darkest">Password</div>
              <input className="w-full py-2 px-3 border rounded outline-none focus:border-blue-light focus:shadow-outline" type="password" />
            </label>
            <input type="checkbox" />
            <label className="ml-1" >Remember Me</label>
            <div className="mb-5 mt-5 text-center">
              <button className="w-24 px-4 py-2 text-white text-sm bg-blue-500 rounded" type="button">
                Submit
              </button>
            </div>
            <div className="text-center text-sm">
              <a className="text-blue-500" href="#">Forgot password</a>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Home
