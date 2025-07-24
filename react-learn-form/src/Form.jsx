import { useState } from "react"


// This way to handle the changes is very lengthy. 
// What if we have lots of input fields ???
/*
export default function Form() {
    let [fullName, setFullName] = useState("");
    let [userName, setUserName] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    }

    let handleUserName = (event) => {
        setUserName(event.target.value);
    }

    return(
        <form action="">
            <label htmlFor="fullName">Full Name: </label>
            <input type="text" 
            placeholder="enter full-name" 
            value={fullName} onChange={handleNameChange}
            id="fullName"
            />
            <br /><br />
            <label htmlFor="userName">User Name: </label>
            <input type="text" 
            placeholder="enter user-name" 
            value={userName} onChange={handleUserName}
            id="userName"
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
} */

// Let's make Only one State variable called formData and 
// pass whole form data as a Object in it.

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name
        // let newValue = event.target.value
        
        // setFormData((currData) => {
        //     currData[fieldName] = newValue;
        //     return {...currData};
        // })

        // setFormData((currData) => {
        //     return {...currData, [fieldName]: newValue};
        // })

        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input type="text" 
            placeholder="enter full-name" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br /><br />
            
            <label htmlFor="userName">User Name: </label>
            <input type="text" 
            placeholder="enter user-name" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="userName"
            name="userName"
            />
            <br /><br />

            <label htmlFor="password">password: </label>
            <input type="password" 
            placeholder="enter password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
}