import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer_Comp";
import Note from "./Note";
import UserInput from "./UserInput";

function App() {
    const [items, setItems] = useState([]);

    function changeItems(userInput) {
        setItems(prev => {
            return [...prev, userInput];
        })
    }

    function deleteItem(id) {
        setItems(prev => {
            return prev.filter((item, index) => {
                return index != id;
            });
        });
    }

    return (
        <div className = "container">
            <Header />
            <UserInput addItem={changeItems}/>

            {items.map((item, index)  => {
                return (
                    <Note 
                    key={index}
                    id={index}
                    title={item.title}
                    content={item.content}
                    deleteItem={deleteItem}
                    />
                );
            })};
            <Note />
            <Footer />
        </div>
    );
}

export default App;
