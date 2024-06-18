import { useState } from "react"

function Counter(){

    // 첫번째 요소 : 상태의 현재 값
    // 두번째 요소 : 상태를 업데이트하는 함수
    const [count,setCount] = useState(5) // 상태 변수 useState를 통해 return되는 변수

    function handleCountUp() {
        setCount(count+100)
    }

    return(
        <div>
            <p>You cliked <span>{count}</span> times</p>
            <button onClick={handleCountUp}>
                Click me!
            </button>
        </div>
    )
}
export default Counter