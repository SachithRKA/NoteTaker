import React, {useState} from "react";

function UserInput(props) {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function changeInput(event) {
        const {name, value} = event.target;
        setInput((prev )=> {
            return {
                ...prev,
                [name]: value
            };
        });
    }

    function doSubmit(event) {
        props.addItem(input);
        setInput({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div className="input-user">
            <form>
                <input 
                    name="title" 
                    placeholder="title" 
                    value={input.title} 
                    onChange={changeInput}/>
                <input 
                    name="content" 
                    placeholder="Content" 
                    value={input.content} 
                    onChange={changeInput}/>
                <button onClick={doSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserInput;