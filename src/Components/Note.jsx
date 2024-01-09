import React, {useState} from "react";


function Note(props) {

    function changeClick() {
        return props.deleteItem(props.id)
    }

    return (
        <div>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <button onClick={changeClick}>Delete</button>
        </div>
    );
}

export default Note;