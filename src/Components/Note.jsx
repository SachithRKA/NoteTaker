import React from "react";

function Note(props) {

    function changeClick() {
        return props.deleteItem(props.id);
    }

    return (
        <div className="note">
            <p>{props.title}</p>
            <p>{props.content}</p>
            <button onClick={changeClick}>Delete</button>
        </div>
    );
}

export default Note;
