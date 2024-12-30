
/*
        <div id="parent">
            <div id="child">
                <h1>Hello this is h1</h1>
                <h2>Hello this is h2</h2>
            </div>
        </div>
    
*/



const example = React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child" }, [
                React.createElement("h1", { id: "h1" }, "Hello this is h1"),
                React.createElement("h2", { id: "h2" }, "Hello this is h2")
        ]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(example);