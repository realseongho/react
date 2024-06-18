import { useState } from "react";
function LikeDisLike(){

    const [count1,setCount1] = useState(0) // 상태 변수 useState를 통해 return되는 변수
    const [count2,setCount2] = useState(0)

    function handleCountUp1() { 
        setCount1(count1+1)
    }
    function handleCountUp2() {
        setCount2(count2+1)
    }

    return(
        <div>
            <button onClick={handleCountUp1}>좋아요</button>
            <span>{count1}</span>
            <button onClick={handleCountUp2}>싫어요</button>
            <span>{count2}</span>
        </div>
    )
}

export default LikeDisLike