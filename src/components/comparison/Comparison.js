import React, {useState} from "react";
import mbti from "../data/mbti.json"
import func_desc from "../data/func_desc.json"
import func_order from "../data/func_order.json"

const Comparison = () => {
    const [inputs, setInputs] = useState({
        mbti1:'',
        mbti2:''
    });
    const [filtered, setFiltered] = useState();

    const updateInputs = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
    }

    const compare = () => {
        if(inputs.mbti1 !== '' && inputs.mbti2 !== ''){

        }
    }

   // console.log(mbti)
    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Compare MBTI</h1>
                <div className={'mt-6'}>
                    <input className={'md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                          key={'mbti_1'} placeholder={'MBTI Type to Compare 1'} name={'mbti1'} list={'types'}
                          pattern={'[IE]{1}[NS]{1}[TF]{1}[PJ]{1}'} onChange={updateInputs}/>
                    <input className={'md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                           key={'mbti_2'} placeholder={'MBTI Type to Compare 2'} name={'mbti2'} list={'types'}
                           pattern={'[IE]{1}[NS]{1}[TF]{1}[PJ]{1}'} onChange={updateInputs}/>
                </div>
                <datalist id={'types'}>
                    {
                        Object.keys(mbti).map(key => {
                            return <option key={key} value={key}>{key}</option>
                        })
                    }
                </datalist>
            </div>

            {
                (inputs.mbti1 !== '' && inputs.mbti2 !== '' && inputs.mbti1.match(/[IE]{1}[NS]{1}[TF]{1}[PJ]{1}/) && inputs.mbti2.match(/[IE]{1}[NS]{1}[TF]{1}[PJ]{1}/))
                    ?   <div className={'grid md:grid-cols-2 gap-6 mt-20 mb-8 px-3'}>
                            <div className={''}>
                                <h2 className={'text-6xl'}>{inputs.mbti1}</h2>
                                {
                                    mbti[inputs.mbti1].map((x,i) => {
                                        return (
                                            <div key={'func1_'+x} className={'my-6'}>
                                                <h4 className={'font-bold text-2xl'}>{func_desc[x].title} ({x})</h4>
                                                <div className={'mt-3 text-gray-500 italic border-l-4 border-gray-200 px-2 py-1'}>
                                                    <p>{func_order[i].name}</p>
                                                    <p className={'text-xs mt-1'}>{func_order[i].desc}</p>
                                                </div>
                                                <p className={'py-3'}>{func_desc[x].desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={''}>
                                <h2 className={'text-6xl'}>{inputs.mbti2}</h2>
                                {
                                    mbti[inputs.mbti2].map((x,i) => {
                                        return (
                                            <div key={'func2_'+x} className={'my-6'}>
                                                <h4 className={'font-bold text-2xl'}>{func_desc[x].title} ({x})</h4>
                                                <div className={'mt-3 text-gray-500 italic border-l-4 border-gray-200 px-2 py-1'}>
                                                    <p>{func_order[i].name}</p>
                                                    <p className={'text-xs mt-1'}>{func_order[i].desc}</p>
                                                </div>
                                                <p className={'py-3'}>{func_desc[x].desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <footer className={'mt-8 text-sm text-gray-500'}>
                                <p>&copy; Nipuna Dodantenna 2021</p>
                                <p>Special thanks to https://www.wellandgood.com/</p>
                                <p>v2.0.0.000</p>
                            </footer>
                        </div>
                    : <></>
            }
        </div>
    )
}

export default Comparison