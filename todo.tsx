import React, { useEffect, useState } from "react";

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
    {
        key: 2,
        type: 'myday',
        name: 'My-Day',
        bgColor: 'bg-emerald-300',
        img: 'https://cdn-icons-png.flaticon.com/512/439/439842.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/439/439842.png',
        listActivity: [
            { text: 'wacthTV', check: true },
            { text: 'read a book', check: false },

        ],
    },
    {
        key: 3,
        type: 'home',
        name: 'Home',
        bgColor: 'bg-teal-300',
        img: 'https://cdn-icons-png.flaticon.com/512/3010/3010995.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/3010/3010995.png',
        listActivity: [
            { text: 'cookink', check: true },
            { text: 'by milk', check: true },
            { text: 'plant a tree', check: true },

        ],
    },
    {
        key: 4,
        type: 'shopping',
        name: 'Shopping',
        bgColor: 'bg-pink-300',
        img: 'https://cdn-icons-png.flaticon.com/512/2173/2173774.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
        listActivity: [
            { text: 'go to crental Monday 25/10/2022', check: true },
            { text: 'watson', check: true },
            { text: 'ซื้อของขวัญวันเกิดเพื่อน', check: true },
            { text: 'ไปดูเสื้อที่ Zara', check: true },

        ],
    },
    {
        key: 5,
        type: 'travel',
        name: 'Travel',
        bgColor: 'bg-green-300',
        img: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
        imgHeader: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
        listActivity: [
            { text: 'hatyai in 4/11/2022', check: true },
            { text: 'plant travel', check: true },
            { text: 'วางแผนไปเที่ยวเชียงใหม่วันอาทิตนี้', check: false },
            { text: 'ไปคาเฟ่ วันเสาร์ ที่ 28/10/202', check: true },

        ],
    },

];

const listType = list?.filter((todos) => todos?.type != 'todo')

const generateKey = (type: String) => {
    return `${type}_${Math.random()}`;
}

//id ที่ใช้ส่งไปลบ -->gen key ใช้ลบ   

const Todo = () => {
    const [listTodos, setListTodos] = useState(Array());    // state เก็บค่า 
    const [newActivity, setNewActivity] = useState(String);
    const [selectType, setSelectType] = useState(listType[0]?.type); //selecttype เก็บค่า list type ตัวแรก เก็บ type โดยไม่เอา todo มา : select

    useEffect(() => {                   //set key data ลง Activity
        let newList = list?.map((todos) => {
            if (todos?.type != 'todo') {                   //   ไม่ต้อง gen ของ todo
                const listActivity = todos?.listActivity?.map((activity) => {
                    return {
                        ...activity,
                        type: todos?.type,
                        key: generateKey(todos?.type),
                    }
                })

                return {
                    ...todos,
                    listActivity: listActivity,  //list แทนที่ ค่า fix จากที่กำหนด
                }
            }
            return todos;
        })

        let listAll = Array();   // เก็บ list activity ทั้งหมด ไป show ที่ todo
        newList?.map((todos) => {
            if (todos?.type != 'todo') {
                //console.log(todos)
                todos?.listActivity?.map((activity) => {
                    listAll.push(activity)     // วนค่า เพื่อเก็บตัวแปลไว้ใน list all
                })
            }
        })

        const newListTodos = newList?.map((todos) => {
            if (todos?.type == 'todo') {
                return {
                    ...todos,       // เก็บข้อมูล listall Activity ลง todo
                    listActivity: listAll,
                }
            }
            return todos;
        })

        setListTodos(newListTodos); //เอาค่าที่ set ใหม่ทั้งหมดมาเก็บใน list todo

    }, [list]);

    useEffect(() => {                                   //ดึงข้อมูลใน local มาเก็บใยตัวแปล dataLocal
        const dataLocalStorage = JSON.parse(localStorage.getItem('listTodos')); //ถ้าไม่ใส่ data เป็น Object ใส่ให้เป็น array 
        console.log(dataLocalStorage);

        if (dataLocalStorage != null) {
            setListTodos(dataLocalStorage);
        }

        
    }, [])

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewActivity(event.target.value); //ถ้ามีการเปลี่ยนข้อมูลใน inpuy box เก็บที่ newactivity
    }

    const changeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectType(event.target.value);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        updaetList(); // put data ตัวใหม่ลง activity ที่เลือก
        //Form submission happens here
    }

    const updaetList = () => {
        const typeTodo = listTodos?.find((todos) => todos?.type === 'todo')
        const type = listTodos?.find((todos) => todos?.type === selectType)   //selectTpyp บอกแค่ id(work,shopping) แต่ไม่ได้บอกว่าในข้อมูลมีอะไรบ้าง  //ข้อมูล ที่ใส่ไป ถ้่าเป็น type เดียวกับที่เลอก เก็บใน const type
        let listActivity = type?.listActivity;
        const newData = {
            key: generateKey(type?.type), // push ข้อมูลใหม่ gen key ใหม่
            type: type?.type,   //ระบุtype
            text: newActivity,
            check: false,
        }
        listActivity.push(newData)

        let listActivityTodo = typeTodo?.listActivity;
        listActivityTodo.push(newData)


        const newListTodos = listTodos?.map((todos) => {
            if (todos?.type === type?.type) {
                todos = {
                    ...todos,
                    listActivity: listActivity,
                }
            }
            else if (todos?.type == 'todo') {
                todos = {
                    ...todos,
                    listActivity: listActivityTodo,
                }
            }
            return todos;
        })

        setListTodos(newListTodos);

        localStorage.setItem("listTodos", JSON.stringify(newListTodos)); // set ค่าใหม่ลง localstorage
    }

    function handleDelete(value) {
        //if (window.confirm("ต้องการลบรายการนี้หรือไม่?")) {
        console.log(value)
        let data = value.split('_');//split แล้วจะได้ data[0]=type, data[1]=เลข random
        const type = data[0];

        const listData = listTodos?.find((todos) => todos?.type == type); //รู้type แต่ไม่รู้ข้อมูล ต้องหาข้อมูลว่าตรงกับ type activity ที่เรากดลบตัวไหน

        const listActivity = listData?.listActivity?.filter((activity) => activity?.key !== value) // filter เป็นการกรองข้อมมูล

        const typeTodo = listTodos?.find((todos) => todos?.type === 'todo')
        const listAll = typeTodo?.listActivity;
        let listActivityTodo = listAll.filter((activity) => activity?.key !== value) //value ที่กดลบ

        const newListTodos = listTodos?.map((todos) => {
            if (todos?.type === type) {
                todos = {
                    ...todos,
                    listActivity: listActivity,
                }
            }
            else if (todos?.type == 'todo') {  //todo ส้ม type todo ทั้งหมดที่แสดง activity
                todos = {
                    ...todos,
                    listActivity: listActivityTodo,
                }
            }
            return todos;
        })

        console.log(newListTodos)
        setListTodos(newListTodos);

        //localStorage.setItem("listTodos", JSON.stringify(newListTodos)); // set ค่าใหม่ลง localstorage;  //Delete ไม่หาย
        //}
    }

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
                            listTodos?.map((todos) => (     //update ข้อมูล เมื่อมีการ set data
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
                    <div className="flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                        <div className="flex mx-5 w-full">
                            <form onSubmit={onSubmitHandler} className="w-full">
                                <div className="gap-4 h-full align-sub justify-between ">
                                    <input type={'text'} className="h-10 m-3 p-5 rounded-xl leading-[3.5rem] align-sub w-8/12" onChange={(e) => inputChangeHandler(e)} />
                                    <select value={selectType} className="p-2 m-1 align-sub w-3/12 rounded-xl" onChange={(e) => changeType(e)}> {/*เลือกประเภท*/}
                                        {listType?.map((type) => (   //กดเลือกประเภท
                                            <option value={type?.type}>{type?.name}</option>
                                        ))}
                                    </select>
                                    <button className="align-sub">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*console.log(listTodos)*/}
                    {
                        listTodos?.map((todos) => (
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
                                                    {todos?.listActivity?.map((activity: Object) => (
                                                        <div className=" flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100">
                                                            <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full">
                                                                {/*<input type="checkbox" className="absolute w-6 h-6" defaultChecked={activity?.check} />*/}
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
                                                        todos?.listActivity?.map((activity: Object) => (
                                                            <div className=" flex ml-32 mt-8 w-[50rem] h-16 rounded-2xl leading-[3.5rem] bg-teal-100 gap-x-8 justify-between">
                                                                <div className="absolute ml-5 mt-4 my-6 w-8 h-8 rounded-full">
                                                                    <input type="checkbox" className="absolute w-6 h-6 " defaultChecked={activity?.check} />
                                                                </div>
                                                                <div className="ml-16 mt-1 ">{activity?.text}</div>
                                                                <div className="mr-5">
                                                                    <button className="align-sub" onClick={() => handleDelete(activity?.key)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            )
                                    }
                                })()}
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