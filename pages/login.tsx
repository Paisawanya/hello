// import type { NextPage } from 'next' 

const login = () => {
    return (
        <>
            <div className="navbar text-end  mt-5 mr-5">
                <a className="text-blue-800 m-3 " href="#">home</a>
                <a className="text-blue-800 m-3" href="#">about</a>
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
                    <label className="ml-1">Remember Me</label>
                    <div className="mb-2 mt-5 text-center">
                        <button className="w-24 px-4 py-2 text-white text-sm bg-blue-500 rounded" type="button">
                            Submit
                        </button>
                    </div>
                    <div className="text-center text-sm ">
                        <a className="text-blue" href="#">Forget</a>
                    </div>
                </div>
            </div>








        </>
    )
}
export default login