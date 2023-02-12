import React from "react";
import {useState, useEffect} from "react";

function BackTotTopButton() {
    const [BackTotTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
            
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return <div className="App">    

        {BackTotTopButton && (
            <button style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                borderRadius:"50px",
                color:"#000",
                backgroundColor:"#fff",
                fontSize:"50px",
            }}
            onClick={scrollUp}
            >
         ^
            </button>
    )}
    </div>
}

export default BackTotTopButton;