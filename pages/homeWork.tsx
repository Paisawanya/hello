// import type { NextPage } from 'next' 


const login = () => {
    return (
        <>
            <div className="h-96 bg-[url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)]">

                <nav className="w-full ">
                    <div className="flex justify-between">
                        <div className="mr-4 py-2 px-2 text-gray-700 ">
                            <a href="#" className="flex items-center " >
                                <svg className="text-teal-300 h-6 w-6 mr-1" xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                                </svg>
                                <span className="ml-2">Blcok Research</span>

                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <a href="" className="py-4 px-2 text-gray-700" >Home</a>
                            <a href="" className="py-4 px-2 text-gray-700">Menu</a>
                            <a href="" className="py-4 px-2 text-gray-700">Block</a>
                            <a href="" className="py-4 px-2 text-gray-700">About Us</a>
                        </div>
                    </div>
                </nav>
                <div className="absolute inset-x-1/4 top-44 text-center">
                    <span className="text-3xl">
                        Web Development
                    </span>
                    <p className="font-extralight pt-2 pb-2">
                        Lorem Ipsum is si mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <button className="py-3 px-8 bg-blue-300 rounded-xl">start</button>
                    <i className="fa fa-fan text-7xl"></i>

                </div>
            </div>

            <div className="text-center mt-5">
                <span>
                    WELLCOME TO WEBSITE
                </span>
                <p className="font-narmal mt-1 indent-8">
                    There are many variations of passages of Lorem Ipsum available
                </p>
            </div>

            <div className="flex flex-row mt-5 justify-center">
                <div className="h-64 w-64 mr-5 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80)]"></div>
                <div className="h-64 w-64 mr-5 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80)] "></div>
                <div className="h-64 w-64 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)]"></div>
            </div>
            <div className="flex flex-row mt-5 justify-center">
                <div className="h-64 w-64  mr-5 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)]"></div>
                <div className="h-64 w-64  mr-5 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)]"></div>
                <div className="h-64 w-64 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)]"></div>
            </div>
            <div className="text-center text-2xl text-gray-90 my-3">
                <span>
                    MENU
                </span>

                <div className="flex flex-row mt-5 justify-center  ">
                    <div className="h-10 w-40 bg-lime-200 mr-5  rounded-xl ">Espresso</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Americano</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Latte</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Cappuccino</div>
                    <div className="h-10 w-40 bg-lime-200 rounded-xl">Mocca</div>
                </div>
                <div className="flex flex-row mt-5 justify-center">
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Macchiato</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Milk</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Fruit</div>
                    <div className="h-10 w-40 bg-lime-200 mr-5 rounded-xl">Matcha</div>
                    <div className="h-10 w-40 bg-lime-200 rounded-xl">Lava</div>
                </div>
            </div>
            <div>
                <div className="h-48 w-full mt-1 bg-yellow-100 text-center  border-green-200 border-2">
                    <div className="absolute left-64 my-8 w-32 h-32 rounded-full bg-yellow-400
                        bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)]">
                    </div>
                    <div className=" ml-40  text-center border-4 flex flex-col justify-center items-center h-48 ">
                        <span className="text-xl  ">CAFE </span>
                        <p>You can t be sad when you are holding a cupcake</p>
                    </div>



                </div>
            </div>
            <div className="h-5 w-full bg-blue-800 text-center ">
                <span className="text-white text-xs  align-text-top">SPY</span>
            </div>
        </>
    )
}
export default login