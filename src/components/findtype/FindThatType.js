import React, {useEffect, useState} from "react";
import mbti from "../data/mbti.json"
import func_desc from "../data/func_desc.json"
import func_order from "../data/func_order.json"

const FindThatType = () => {
    const [inputs, setInputs] = useState({
        func_1:'',
        func_2:'',
        func_3:'',
        func_4:'',
    })

    const updateInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value.toUpperCase()
        })
    }

    useEffect(() => {
        const series = [1,2,3,4]

        series.map((x,i) => {

        })
    },[inputs])

    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Find that Type</h1>
                <div className={'mt-6'}>
                    <input name={'func_1'} placeholder={'1st function'}
                          className={'md:w-1/6 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'} onChange={updateInput}/>
                    <input name={'func_2'} placeholder={'2nd function'}
                           className={'md:w-1/6 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'} onChange={updateInput}/>
                    <input name={'func_3'} placeholder={'3rd function'}
                           className={'md:w-1/6 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'} onChange={updateInput}/>
                    <input name={'func_4'} placeholder={'4th function'}
                           className={'md:w-1/6 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'} onChange={updateInput}/>
                </div>
            </div>
        </div>
    )
}

export default FindThatType