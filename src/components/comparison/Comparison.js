import React, {useState} from "react";
import mbti from "../data/mbti.json"
import func_desc from "../data/func_desc.json"
import func_order from "../data/func_order.json"
import Header from "../Header";
import Modal from "../common/Modal";
import Footer from "../common/Footer";

const MbtiList = () => {
    return (
        <>
            <option>Select MBTI type</option>
            {Object.keys(mbti).map((key) => (
                <option key={key} value={key}>{key}</option>
            ))}
        </>
    )
}
const Comparison = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal, setModal] = useState({
        title:'',
        content:''
    });
    function openModal(modal) {
        setModal(modal)
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

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
        <div className={'container mx-auto pb-20'}>
            <Header />
            <Modal isOpen={modalIsOpen} closeModal={closeModal} modal={modal} />
            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Compare MBTI</h1>
                <div className={'mt-6'}>
                    <p className={''}>Compare cognitive functions of MBTI types between,</p>
                    <select
                        className={'dark:bg-gray-800 md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                        key={'mbti_1'}
                        placeholder={'MBTI Type to Compare 1'}
                        name={'mbti1'}
                        onChange={updateInputs}>
                            <MbtiList />
                    </select>
                    <select
                        className={'dark:bg-gray-800 md:w-1/3 mt-3 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3'}
                        key={'mbti_2'}
                        placeholder={'MBTI Type to Compare 2'}
                        name={'mbti2'}
                        onChange={updateInputs}>
                            <MbtiList />
                    </select>
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
                                            return <span
                                                key={'rounds_'+i+x}
                                                style={{width: '48px'}}
                                                className={shade+' rounded-full p-3 my-3 mx-1 inline-block cursor-pointer text-black'}
                                                onClick={() => openModal({
                                                    title:func_desc[x].title+' ('+x+')',
                                                    content:'<div class="border-l-4 dark:border-gray-400 pl-2 my-3"><h4 class="text-gray-500 dark:text-gray-400 mb-1 cuprum">'+func_order[i].name+'</h4><p class="text-xs text-gray-500 dark:text-gray-400">'+func_order[i].desc+'</p></div><p class="leading-6">'+func_desc[x].desc+'</p>',
                                                })}
                                            >{x}</span>
                                        })
                                    }
                                </div>
                            ))
                        }
                    </>
                    : <></>
            }
        </div>
    )
}

export default Comparison