
import { useEffect, useState } from "react";
import { text } from "stream/consumers";

const Ex1 = () => {

    let foo = 'bar';

    const [todos, setTodos] = useState(['one', 'Two']);
    const [message, setMessage] = useState(''); //เก็บค่า 



    const remove = () => {
        localStorage.removeItem('Todos'); //เก็บค่าไว้ที่ storage

    };

    useEffect(() => {
        const td = typeof window !== 'undefined' ? localStorage.getItem('Todos') : null
        // console.log(td)

        //console.log(td?.split(','));
        let text = td?.split(',');

        if (td != null) {
            setTodos(text);
        }
    }, [])

    useEffect(() => {
        console.log(todos)
    }, [todos])

    //const add = () => {
    //console.log("Type")  
    // localStorage.setItem("Todos", todos.toString());  //เก็บค่าที่ เพิ่ม  ที่   storage
    //console.log(test)



    //};



    return (
        <>
            {
                todos?.map((item, index) =>
                (
                    <div key={index}>
                        {index + 1}:{item}
                        <button className="pl-5" onClick={() => {
                            setTodos(todos?.filter((value, key) => key !== index));
                            //localStorage.setItem("Todos", todos?.filter((value, key) => key !== index).toString()) //ลบใน localstoreage
                        }}>
                            Delete
                        </button>
                        <br />
                    </div>
                )

                )
            }


            <h1>Hello :{message} </h1>

            <input type="text"
                value={message}
                onChange={(e) => {
                    //console.log(e.target.value);
                    setMessage(e.target.value);

                }}
                className="border border-black"

            />

            <button onClick={() => {
                //tostring แปลง array เป็นข้อความ
                setTodos([...todos, message]);
                setMessage('');
                console.log('Clike')
                localStorage.setItem("Todos", [...todos, message].toString())
                //console.log(todos.toString())
            }}>

                Add
            </button>






        </>
    )

};


export default Ex1