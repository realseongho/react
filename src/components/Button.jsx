
function Button() {
    function handleOnClick(name){
        alert(`Hi {$name}!`)
    }
    return (
        <button onClick={handleOnClick}>
            Click me!
        </button>
    )
}
export default Button