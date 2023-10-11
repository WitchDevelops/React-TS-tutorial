// PascalCase for components
function Message() {
    // JSX: JavaScript XML
    // so it will be converted to JS
    // you can check it here: https://babeljs.io/
    const name = "";
    if (name) {
        return <h1>Hello { name } </h1>;
    }
    return <h1>Hi there</h1>
}

export default Message;