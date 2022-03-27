import React, {useState} from "react";
import mbti from "../data/mbti.json"
import func_desc from "../data/func_desc.json"
import func_order from "../data/func_order.json"
import Header from "../Header";
import Modal from "../common/Modal";
import Footer from "../common/Footer";

const Comparison = () => {
    const [inputs, setInputs] = useState({
        mbti1:'',
        mbti2:''
    });

    const updateInputs = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value.toUpperCase()
        })
    }

    return (
        <div className={'container mx-auto'}>
            <Header />
            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Compare MBTI</h1>
                <div className={'mt-6'}>
                    <p className={''}>Compare cognitive functions of MBTI types between,</p>
                    <input className={'md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                          key={'mbti_1'} placeholder={'MBTI Type to Compare 1'} name={'mbti1'} list={'types'} onChange={updateInputs}/>
                    <input className={'md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                           key={'mbti_2'} placeholder={'MBTI Type to Compare 2'} name={'mbti2'} list={'types'} onChange={updateInputs}/>
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
                    ? <>
                        {
                            Object.keys(inputs).map(count => (
                                <div key={'rounds_'+count} className={'text-center'}>
                                    <h2 className={'text-3xl'}>{inputs[count]}</h2>
                                    <span className={'bg-blue-400 bg-blue-300 bg-blue-200 bg-blue-100'}></span>
                                    {
                                        mbti[inputs[count]].map((x, i) => {
                                            let shade = 'bg-blue-'+(400 - i*100)
                                            return <span key={'rounds_'+i+x} style={{width: '48px'}} className={shade+' rounded-full p-3 my-3 mx-1 inline-block'}>{x}</span>
                                        })
                                    }
                                </div>
                            ))
                        }
                        <div className={'grid md:grid-cols-2 gap-6 mt-20 mb-8 px-3'}>
                            {
                                Object.keys(inputs).map(count => (
                                    <div key={count} className={''}>
                                        <h2 className={'text-6xl'}>{inputs[count]}</h2>
                                        {
                                            mbti[inputs[count]].map((x, i) => {
                                                return (
                                                    <div key={'func1_' + x} className={'my-6'}>
                                                        <h4 className={'font-bold text-2xl'}>{func_desc[x].title} ({x})</h4>
                                                        <div
                                                            className={'mt-3 text-gray-500 bold border-l-4 border-gray-200 px-2 py-1'}>
                                                            <p className={'text-xl cuprum'}>{func_order[i].name}</p>
                                                            <p className={'text-xs mt-1'}>{func_order[i].desc}</p>
                                                        </div>
                                                        <p className={'py-3'}>{func_desc[x].desc}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ))

                            }
                            <Footer />
                        </div>
                    </>
                    : <></>
            }
        </div>
    )
}

export default Comparison