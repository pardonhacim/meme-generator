import React from "react";

function Form(){

    const[firstName,setFirstName]=React.useState("");
    const[email,setEmail]=React.useState("");
    const[isComputer,setIsComputer]=React.useState(false);
    const[status,setStatus]=React.useState("");
    const[om,setOm]=React.useState("");
    

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

    function handleOm(event){
        setOm(event.target.value)
    }
    console.log(om);
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(event);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstName}/>
            <input type="email" placeholder="Email" value={email} onChange={handleEmail} />
            <input type="checkbox" checked={isComputer} onChange={handleCheckbox}/>

            <input type="radio" value="fulltime" name="fulltime" checked={status ==="fulltime"} onChange={handleRadio}/>
            <label>full time</label>

            <input type="radio" value="parttime" name="parttime" checked={status ==="parttime"} onChange={handleRadio}/>
            <label>partt time</label>

            <input type="radio" value="freelance" name="freelance" checked={status ==="freelance"} onChange={handleRadio}/>
            <label>freelance</label>

            <input type="radio" value="unemployed" name="unemployed" checked={status ==="unemployed"} onChange={handleRadio}/>
            <label>unemployed</label>
            <br/>
            <br/>
            <label>omer</label>
            <select value={om} onChange={handleOm} name="OM"> 
                <option value="Om">Om</option>
                <option value="omm">OMMM</option>
                <option value="o">O</option>
                <option value="Omer">Omer</option>

            </select>
            
            <button>submit</button>
        </form>
        
        </>
    )
}

export default Form;