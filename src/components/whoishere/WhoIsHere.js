import React, {useEffect, useState} from "react";
import mbti from "../../data/mbti.json"
import func_desc from "../../data/func_desc.json"
import func_order from "../../data/func_order.json"
import Header from "../common/Header";
import Modal from "../common/Modal";
import Footer from "../common/Footer";

const WhoIsHere = () => {
    // Modal
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

    // who is States
    const [inputs, setInputs] = useState({
        1:'X',
        2:'X',
        3:'X',
        4:'X'
    })
    const [filtered, setFiltered] = useState([]);

    const updateInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
    }

    useEffect(() => {
        setFiltered([]);
        let search = '['+inputs[1]+']{1}['+inputs[2]+']{1}['+inputs[3]+']{1}['+inputs[4]+']{1}';
        search = search.replaceAll('X', 'a-zA-Z')
        const regex = new RegExp(search, 'gi');
        const keys = Object.keys(mbti).filter(key => key.match(regex));
        let filtered = []
        keys.forEach((key) => {
            filtered.push({mbti:key, func: mbti[key]})
        })
        setFiltered(filtered);
    },[inputs])

    return (
        <div className={'container mx-auto'}>
            <Header />

            <Modal isOpen={modalIsOpen} closeModal={closeModal} modal={modal} />

            <div className={'flex justify-center flex-col text-center p-8'}>
                <h1 className={'text-5xl md:text-8xl mb-4 inline-block'}>Filter 'em</h1>
                <div className={'mt-6'}>
                    <p className={''}>Find types with MBTI functions on the,</p>
                    <div className={'inline-block'}>
                        <div className={'btn-group inline-block mr-4'}>
                            <p className={'my-6'}>Mind</p>
                            <input name={'1'} type={"radio"} value={'I'} id={'I'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'I'}>I</label>
                            <input name={'1'} type={"radio"} value={'E'} id={'E'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'E'}>E</label>
                            <input name={'1'} type={"radio"} value={'X'} id={'x1'} className={'hidden'} onChange={updateInput} />
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x1'}>X</label>
                        </div>
                        <div className={'btn-group inline-block mr-4'}>
                            <p className={'my-6'}>Energy</p>
                            <input name={'2'} type={"radio"} value={'N'} id={'N'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'N'}>N</label>
                            <input name={'2'} type={"radio"} value={'S'} id={'S'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'S'}>S</label>
                            <input name={'2'} type={"radio"} value={'X'} id={'x2'} className={'hidden'} onChange={updateInput} />
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x2'}>X</label>
                        </div>
                        <div className={'btn-group inline-block mr-4'}>
                            <p className={'my-6'}>Nature</p>
                            <input name={'3'} type={"radio"} value={'T'} id={'T'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'T'}>T</label>
                            <input name={'3'} type={"radio"} value={'F'} id={'F'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'F'}>F</label>
                            <input name={'3'} type={"radio"} value={'X'} id={'x3'} className={'hidden'} onChange={updateInput} />
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x3'}>X</label>
                        </div>
                        <div className={'btn-group inline-block mr-4'}>
                            <p className={'my-6'}>Tactics</p>
                            <input name={'4'} type={"radio"} value={'P'} id={'P'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'P'}>P</label>
                            <input name={'4'} type={"radio"} value={'J'} id={'J'} className={'hidden'} onChange={updateInput}/>
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'} htmlFor={'J'}>J</label>
                            <input name={'4'} type={"radio"} value={'X'} id={'x4'} className={'hidden'} onChange={updateInput} />
                            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x4'}>X</label>
                        </div>
                    </div>
                    {/*:<input name={'any'} placeholder={'Any place'} className={'md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mx-3 mt-2'} onChange={updateInputAny}/>*/}
                </div>
            </div>

            {
                (inputs.func_1 !== '' || inputs.func_2 !== '' || inputs.func_3 !== '' || inputs.func_4 !== '')
                    ?   <div className={'pt-20 pb-20 text-center'}>
                            {
                                filtered.map((x,index) => {
                                    return (
                                        <div className={'my-2 p-3'} key={index}>
                                            <h2 className={'text-6xl'}>{x.mbti}</h2>
                                            <div className={''}>
                                            {
                                                x.func.map((fun, i) => {
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
            <Footer />
        </div>
    )
}

export default WhoIsHere