import React from "react";
import './listitem.css';


const ListItem = ({ url, shortly }) => {
    function copyToClipBoard(index) {
        console.log('shortly', shortly);
        navigator.clipboard.writeText(shortly);
    }

    return (
        <div className="gpt3__listitem-content__input">
            <input className="gpt3__listitem-content__input-url" type="text" value={url} disabled />
            <input className="gpt3__listitem-content__input-shortly" type="text" value={shortly} disabled />
            <button className="gpt3__listitem-content__input-copy" type="button" onClick={() => copyToClipBoard()}>Copy</button>
        </div>
    )
}

export default ListItem;