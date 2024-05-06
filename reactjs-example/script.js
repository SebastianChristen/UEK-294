// script.js
const MyFirstcomponent = () => {
    return (
        <div className="my-first-component">
            <h1>Hello world!</h1>
            <p>Writing components is fun!</p>
        </div>
    )
}

ReactDOM.render(
    <MyFirstcomponent />
, document.getElementById("root"))

