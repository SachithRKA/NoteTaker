import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer_Comp";
import Note from "./Note";
import UserInput from "./UserInput";

function App() {
    const [items, setItems] = useState([]);

    function changeItems(userInput) {
        setItems(prev => {
            return [...prev, userInput];
        });
    }

    function deleteItem(id) {
        setItems(prev => {
            return prev.filter((item, index) => {
                return index != id;
            });
        });
    }

    return (
        <div className="container">
            <Header />
            <div className="main-content">
                <UserInput addItem={changeItems} />
                <div className="notes-container">
                    {items.map((item, index) => {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={item.title}
                                content={item.content}
                                deleteItem={deleteItem}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
