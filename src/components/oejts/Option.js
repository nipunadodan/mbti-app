import React, {useEffect, useRef} from "react";

const Option = (props) => {
    const index = props.index

    const el = useRef(null)

    const updateInput = (e) => {
        props.updateInput(e)
    }

    useEffect(()=>{
        if(Object.keys(props.inputs).length === 0){
            el.current.reset()
        }
    },[props.inputs])

    return (
        <form ref={el} className={'flex justify-center'}>
            {[1,2,3,4,5].map((points,unique) => (
                <div key={unique} className={'btn-group inline-block mx-2'}>
                    <input name={'q'+(index+1)} type={"radio"} value={points} id={index + '_' + points} className={'hidden'} onChange={(e)=>updateInput(e)}/>
                    <label className={'inline-block border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={index + '_' + points}>{points}</label>
                </div>
            ))}
        </form>
    )
}

export default Option