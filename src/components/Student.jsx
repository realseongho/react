function Student (props){
    const {name, age, major} = props
    // if(age>=20){
    //     return(
    //         <h1 style={{ textDecoration: 'underline' }}>
    //             {name}, {age}, {major}
    //         </h1>
    //     )
    // }
    // else{
    //     return (
    //         <h1>
    //             {name}, {age}, {major}
    //         </h1>
    //     )
    // }
    let st = {};
    if(age>=20){
        st = { textDecoration: 'underline' };
    }
    return(
        <h1 style = {st}>
            {name}, {age}, {major}
        </h1>
    )
}

export default Student