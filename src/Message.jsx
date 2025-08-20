function Message() {

    function handleClick() {
        console.log("Button clicked!");
    }
    return (
        <>

        <button onClick={handleClick}>click me </button>
        </>
    )
}

export default Message;