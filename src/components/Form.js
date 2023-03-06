import React from "react";

function Form(){

    const[firstName,setFirstName]=React.useState("");
    const[email,setEmail]=React.useState("");
    const[isComputer,setIsComputer]=React.useState(false);
    const[status,setStatus]=React.useState("");


    function handleFirstName(event){
        console.log(event.target.value);
        setFirstName(event.target.value);
    }

    function handleEmail(event){
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleCheckbox(event){
        setIsComputer(event.target.checked)
    }


    function handleRadio(event){
        setStatus(event.target.value)
    }

    

    return(
        <>
        <form>
            <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstName}/>
            <input type="email" placeholder="Email" value={email} onChange={handleEmail} />
            <input type="checkbox" checked={isComputer} onChange={handleCheckbox}/>
            <input type="radio" value="fulltime" name="fulltime" checked={status} onChange={handleRadio}/>

        </form>
        
        </>
    )
}

export default Form;