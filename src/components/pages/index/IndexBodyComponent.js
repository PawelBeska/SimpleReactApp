function IndexBodyComponent() {
    const date = new Date();
    return (<h1>
        Aplikacja reactowa!
        {date.getHours()}
    </h1>);
}

export default IndexBodyComponent;