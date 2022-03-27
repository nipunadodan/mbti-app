import React, {useEffect, useState} from "react";
import mbti from "../data/mbti.json"
import func_desc from "../data/func_desc.json"
import func_order from "../data/func_order.json"
import Header from "../Header";
import Modal from "../common/Modal";
import Footer from "../common/Footer";

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

    const updateInputAny = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value.toUpperCase()
        })
    }

    useEffect(() => {
        setFiltered([]);
        const results = [];

        Object.keys(inputs).map(input => {
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
            })
        })
    },[inputs])

    return (
        <div className={'container mx-auto'}>
            <Header />

            <Modal isOpen={modalIsOpen} closeModal={closeModal} modal={modal} />

            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Find that Type</h1>
                <div className={'mt-6'}>
                    <p className={''}>Find types with cognitive functions on the,</p>
                    <input name={'1'} placeholder={'1st function'} className={'md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}/>
                    <input name={'2'} placeholder={'2nd function'} className={'md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}/>
                    <input name={'3'} placeholder={'3rd function'} className={'md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}/>
                    <input name={'4'} placeholder={'4th function'} className={'md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'} onChange={updateInput}/>
                    {/*:<input name={'any'} placeholder={'Any place'} className={'md:w-1/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mx-3 mt-2'} onChange={updateInputAny}/>*/}
                </div>
            </div>

            {
                (inputs.func_1 !== '' || inputs.func_2 !== '' || inputs.func_3 !== '' || inputs.func_4 !== '' || inputs.any !== '')
                    ?   <div className={'mt-20 mb-20'}>
                            {
                                filtered.map((x) => {
                                    return (
                                        <div className={'my-2 p-3'} key={x}>
                                            <h2 className={'text-6xl'}>{x}</h2>
                                            <div className={'grid md:grid-cols-4 mt-4 mb-6'}>
                                            {
                                                mbti[x].map((fun) => (
                                                    <p key={x+fun+(Math.floor(Math.random()*10)).toString()}>
                                                        {func_desc[fun].title} ({fun})
                                                        <i
                                                            className={'ml-1 la la-info-circle hover:text-blue-500 cursor-pointer'}
                                                            onClick={() => openModal({
                                                                title:func_desc[fun].title+' ('+fun+')',
                                                                content:func_desc[fun].desc,
                                                            })} /> </p>
                                                ))
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