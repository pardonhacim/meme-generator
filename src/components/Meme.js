import React from "react";
import "../styles/Meme.css"

function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        image:"https://i.imgflip.com/3si4.jpg"
    })

    const[allImages,setAllImages] = React.useState([]);

    React.useEffect(() => {
        async function getImages(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllImages(data.data.memes);
            console.log(data);
        }

        getImages();
    },[]);

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allImages.length);
        const url = allImages[randomNumber]?.url;
        
        setMeme((prevState) => {
           return {...prevState, image: url}
        });
        console.log(meme);

    }

    //getMemeImage();

    return(
        <div className="form">
            <input 
                type="text"
                placeholder="Top Text"
                className="form-input"
            />

            <input 
                type="text"
                placeholder="Bottom Text"
                className="form-input"
            />

            <button className="form-btn" onClick={getMemeImage}>Get a new meme image </button>
        </div>
    )
}
export default Meme;