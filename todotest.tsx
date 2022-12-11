const list = [
    {
        key: 0,
        type: 'todo',
        name: 'To-Do',
        bgColor: 'bg-cyan-200',
        img: 'https://cdn-icons-png.flaticon.com/512/5290/5290058.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/1791/1791342.png',

    },
    {
        key: 1,
        type: 'work',
        name: 'Work',
        bgColor: 'bg-emerald-100',
        img: 'https://cdn-icons-png.flaticon.com/512/2098/2098255.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/2098/2098255.png',
        listActivity: [
            { text: 'report ', check: true },

        ],
    },
    
    

];

let listTodos = [];
/*listTodos = list?.map((todos) => {
    return todos?.listActivity?.map((activity) => {
        return {
            text: activity?.text,
            check: activity?.check,
        }
    });
}).flat();*/


const Todo = () => {
    return (
        <>
            <div className="flex ">
                <div className="w-[30%] h-[100vh] ">
                    <div className=" grid-rows-8 ">
                        <div className="py-3 w-full bg-red-100">
                            <div className="absolute ml-3 w-12 h-12 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/4140/4140037.png)]">
                            </div>
                            <div className="flex ml-20 h-12 items-center">Hello Smith</div>
                        </div>
                        {
                            list?.map((todos) => (
                                <>
                                    <div className={'flex  h-16 items-center ' + `${todos?.bgColor}`}>
                                        <div className={'absolute ml-3 w-12 h-12 rounded-full bg-center bg-cover bg-[url(' + `${todos?.img}` + ')]'}>
                                        </div>
                                        <div className="flex ml-20 h-12 items-center">{todos?.name}</div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="w-[70%] bg-emerald-600 ">
                    {
                        list?.map((todos) => (
                            <>
                                <div className={'absolute ml-32 my-6 w-20 h-20  mt-16 rounded-full bg-center bg-cover bg-[url(' + `${todos?.imgHeader}` + ')]'}>
                                </div>
                                <div>
                                    <div className="flex text-center ml-48 mx-4 space-y-2">
                                        <h1 className="text-black  ml-8 text-xl mt-28 ">
                                            {todos?.name}
                                        </h1>
                                    </div>
                                </div>
                                {(() => {
                                    switch (todos?.type) {
                                        case 'todo':
                                            return (
                                                <>
                                                    {listTodos?.map((activity) => (
                                                        <div className=" flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                                                            <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full">
                                                                <input type="checkbox" className="absolute w-6 h-6" defaultChecked={activity?.check} />
                                                            </div>
                                                            <div className="ml-16 mt-1 ">{activity?.text}</div>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                        default:
                                            return (
                                                <>
                                                    {
                                                        todos?.listActivity?.map((activity) => (
                                                            <div className=" flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                                                                <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full">
                                                                    <input type="checkbox" className="absolute w-6 h-6 " defaultChecked={activity?.check} />
                                                                </div>
                                                                <div className="ml-16 mt-1 ">{activity?.text}</div>
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            )
                                    }
                                })()}
                                <div className="flex ml-32 mt-8 w-[50rem] h-16 bg-blue-200 rounded-xl"></div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

/*
const Todo = () => {
    return (
        <>
            <div className="flex ">
                <div className="w-[30%] h-[100vh] ">
                    <div className=" grid-rows-8 ">
                        <div className="py-3 w-full bg-red-100">
                            <div className="absolute ml-3 w-12 h-12 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/4140/4140037.png)]">
                            </div>
                            <div className="flex ml-20 h-12 items-center">Hello Smith</div>
                        </div>
                        <div className="flex  h-16 items-center bg-cyan-200">
                            <div className="absolute ml-3 w-12 h-12 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/5290/5290058.png)]">
                            </div>
                            <div className="flex ml-20 h-12 items-center">To-Do</div>
                        </div>
                        <div className="flex h-16 items-center bg-emerald-300">
                            <div className="absolute ml-3 w-10 h-10 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/439/439842.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">MyDay</div>
                        </div>
                        <div className="flex h-16 items-center bg-cyan-300">
                            <div className="absolute ml-3 w-10 h-10 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/2098/2098255.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">Work</div>
                        </div>
                        <div className="flex  h-16 items-center bg-emerald-300">
                            <div className="absolute ml-3 w-10 h-10 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/3010/3010995.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">Home</div>
                        </div>
                        <div className="flex  h-16 items-center  bg-cyan-300">
                            <div className="absolute ml-3 w-10 h-10 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/561/561611.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">Groceries</div>
                        </div>
                        <div className="flex  h-16 items-center bg-emerald-500">
                            <div className="absolute ml-3 w-10 h-10 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/854/854894.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">Travel</div>
                        </div>
                        <div className="flex  h-16 items-center bg-lime-100">
                            <div className="absolute ml-3 w-5 h-5 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/748/748113.png)]">
                            </div>
                            <div className="flex ml-20 h-10 items-center">Newlist</div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] h-[100vh] bg-emerald-600 ">
                    <div className="absolute ml-32 my-6 w-20 h-20  mt-16 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/1791/1791342.png)]">
                    </div>
                    <div>
                        <div className="flex text-center ml-48 mx-4 space-y-2">
                            <h1 className="text-black  ml-8 text-xl mt-28 ">
                                To-Do
                            </h1>
                        </div>
                    </div>
                    <div className=" flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                        <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/5290/5290058.png)]">
                        </div>
                        <div className="ml-16 mt-1 ">Work at 9.30</div>
                    </div>
                    <div className=" flex ml-32 mt-2 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                        <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/5290/5290058.png)]">
                        </div>
                        <div className="ml-16 mt-1 ">Meet</div>
                    </div><div className=" flex ml-32 mt-2 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                        <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/5290/5290058.png)]">
                        </div>
                        <div className="ml-16 mt-1 ">Diner</div>
                    </div>
                    <div className=" flex ml-32 mt-2 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                        <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/5290/5290058.png)]">
                        </div>
                        <div className="ml-16 mt-1 ">Home-work</div>
                    </div>
                    <div className="absolute ml-32 mt-4 my-6 w-8 h-8 rounded-full
                        bg-center bg-cover bg-[url(https://cdn-icons-png.flaticon.com/512/4315/4315609.png)]">
                        <p className="text-white  mt-2 ml-12">Newlist</p>
                    </div>
                </div>
            </div>

        </>
    )
}
*/

export default Todo;