import React, {useEffect, useState} from "react";
import mbti from "../../data/mbti.json"
import func_desc from "../../data/func_desc.json"
import func_order from "../../data/func_order.json"
import Header from "../common/Header";
import Modal from "../common/Modal";

const FunctionsList = (props) => {
    return (
        <>
            <option>{props.func}</option>
            {Object.keys(func_desc).map((key) => (
                <option key={key} value={key}>{key}</option>
            ))}
        </>
    )
}

const FindThatType = () => {
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
        1:'',
        2:'',
        3:'',
        4:'',
        any:''
    })
    const [filtered, setFiltered] = useState([]);

    const updateInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value.toUpperCase()
        })
    }

    useEffect(() => {
        setFiltered([]);
        const results = [];

        Object.keys(inputs).map(input => (
            Object.keys(mbti).map(key => {
                //mbti[key].map(func => {
                if(input !== 'any') {
                    const position = parseInt(input) - 1
                    if (mbti[key][position].toUpperCase() === inputs[input]) {
                        results.push(key)
                        setFiltered([...new Set(results)])
                        //console.log('filtered',input,key,mbti[key][position],results,filtered)
                    }
                    return false
                    //})
                }
                return false
            })
        ))
    },[inputs])

    return (
        <div className={'container mx-auto'}>
            <Header />

            <Modal isOpen={modalIsOpen} closeModal={closeModal} modal={modal} />

            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Find that Type</h1>
                <div className={'mt-6'}>
                    <p className={''}>Find types with cognitive functions on the,</p>
                    <select name={'1'} placeholder={'1st function'} className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}>
                        <FunctionsList func={'Dominant function'} />
                    </select>
                    <select name={'2'} placeholder={'2nd function'} className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}>
                        <FunctionsList func={'Auxiliary function'} />
                    </select>
                    <select name={'3'} placeholder={'3rd function'} className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}>
                        <FunctionsList func={'Tertiary function'} />
                    </select>
                    <select name={'4'} placeholder={'4th function'} className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}>
                        <FunctionsList func={'Inferior function'} />
                    </select>
                    {/*:<input name={'any'} placeholder={'Any place'} className={'md:w-1/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mx-3 mt-2'} onChange={updateInputAny}/>*/}
                </div>
            </div>

            {
                (inputs.func_1 !== '' || inputs.func_2 !== '' || inputs.func_3 !== '' || inputs.func_4 !== '' || inputs.any !== '')
                    ?   <div className={'pt-20 pb-20 text-center'}>
                            {
                                filtered.map((x) => {
                                    return (
                                        <div className={'my-2 p-3'} key={x}>
                                            <h2 className={'text-6xl'}>{x}</h2>
                                            <div className={''}>
                                            {
                                                mbti[x].map((fun, i) => {
                                                    let shade = 'bg-blue-' + (400 - i * 100)
                                                    return <span
                                                        key={'rounds_' + i + fun}
                                                        style={{width: '48px'}}
                                                        className={shade + ' rounded-full p-3 my-3 mx-1 inline-block cursor-pointer text-black'}
                                                        onClick={() => openModal({
                                                            title: func_desc[fun].title + ' (' + fun + ')',
                                                            content: '<div class="border-l-4 dark:border-gray-400 pl-2 my-3"><h4 class="text-gray-500 dark:text-gray-400 cuprum mb-1">' + func_order[i].name + '</h4><p class="text-xs text-gray-500 dark:text-gray-400">' + func_order[i].desc + '</p></div><p class="leading-6">' + func_desc[fun].desc+'</p>',
                                                        })}
                                                    >{fun}</span>
                                                })
                                            }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    :   <>No inputs</>
            }
        </div>
    )
}

export default FindThatType