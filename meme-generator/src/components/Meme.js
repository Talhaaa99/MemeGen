import React from "react";
import memedata from "./memedata";

let url;

function getMemeImage() {
    const memeArray = memedata.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;
    console.log(url);
}
export default function Meme() {
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                className="form--input"
                placeholder="On top"
                type='text' />
                <input 
                className="form--input"
                placeholder="On bottom"
                type='text' />
                <button className="form--button" onClick={getMemeImage}>New Meme Generate</button>
            </div>
            <img className="meme--image" src="./images/memeimg.png" />
        </main>
    );
}