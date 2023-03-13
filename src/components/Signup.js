import "../styles/Signup.css"
import React from "react";

function Signup(){
    <br/>
    
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const[passwordConfirm,setPasswordConfirm]=React.useState("");
    const[joinNewsletter,setJoinNewsletter]=React.useState(false);


    function handleEmail(event){
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    function handleConfirmPassword(event){
        setPasswordConfirm(event.target.value);
    }

    function handleNewsletter(event){
        setJoinNewsletter(event.target.checked)
        
    }
    function handleSubmit(event){
        event.preventDefault();
        if (password===passwordConfirm) {
            alert("yes");
        }
        else{
            alert("no");
        }
    }
    


    return(
        <>
         <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email Adress" 
                    className="form--input" onChange={handleEmail} value={email}
                     name="email"/>
                    
                    <input className="form--input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        name="password"
                    />

                    <input className="form--input"
                        type="password"
                        placeholder="Password Confirm"
                        value={passwordConfirm}
                        onChange={handleConfirmPassword}
                        name="password-confirm"
                    />


                    
                    <input 
                        type="checkbox"
                        checked={joinNewsletter} 
                        onChange={handleNewsletter}
                        name="newsletter"
                     
                    />
                    <label>I want to join Newsletter</label>

                    <button className="form--submit">Submit</button>

                    
                </form>
         </div>
        </>
    )
}

export default Signup;