// import type { NextPage } from 'next' 

const hello = () => {
  return (
    <>
      <div className="navbar mt-5 mr-8 " >
        <div className="text-end">
          <a className="hover:text-blue-800  m-3 " href="#">Help Center</a>
          <a className="hover:text-blue-800  m-3" href="#">My Library</a>
          <a className="hover:text-blue-800  m-3" href="#">Blog</a>
          <a className="hover:text-blue-800  m-3" href="#">About Us</a>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen  w-full ">
        <div className="text-slate-500 w-96">
          <div className="text-center">
            <label className="mb-3 font-normal text-center text-3xl">Log In</label>
          </div>
          <label className="block-login mb-5">
            <div className="mb-1 text-grey-darkest">Email</div>
            <input className="w-full py-2 px-2 border rounded focus:border-blue-light " type="text" />
          </label>
          <label className="block-login mb-5">
            <div className="mb-1 text-grey-darkest">Password</div>
            <input className="w-full py-2 px-3 border rounded  focus:border-blue-light " type="password" />
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
    </>
  )
}
export default hello