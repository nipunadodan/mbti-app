import React, {useEffect, useState} from "react";
import oejts from "../../data/oejts_questions.json"
import Header from "../common/Header";
import {capitalize} from "../helpers";
import Footer from "../common/Footer";
import Option from "./Option";

const Oejts = () => {
    const [inputs, setInputs] = useState({})
    const [results, setResults] = useState({
        ie:'',
        sn:'',
        ft:'',
        jp:'',
        final:''
    });
    const [subTotal, setSubTotal] = useState({
        ie:0,
        sn:0,
        ft:0,
        jp:0,
        total:0
    })

    const updateInput = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : parseInt(event.target.value)
        })
    }

    const reset = () => {
        setInputs({});
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    useEffect(()=>{
        const ie = 30 - inputs.q3 - inputs.q7 - inputs.q11 + inputs.q15 - inputs.q19 + inputs.q23 + inputs.q27 - inputs.q31;
        const sn = 12 + inputs.q4 + inputs.q8 + inputs.q12 + inputs.q16 + inputs.q20 - inputs.q24 - inputs.q28 + inputs.q32;
        const ft = 30 - inputs.q2 + inputs.q6 + inputs.q10 - inputs.q14 - inputs.q18 + inputs.q22 - inputs.q26 - inputs.q30;
        const jp = 18 + inputs.q1 + inputs.q5 - inputs.q9 + inputs.q13 - inputs.q17 + inputs.q21 - inputs.q25 + inputs.q29;

        setSubTotal({
            ie: ie,
            sn:sn,
            ft:ft,
            jp:jp,
            total:ie+sn+ft+jp
        })
    },[inputs])

    useEffect(()=>{
        setResults({
            ie: subTotal.ie > 24 ? 'E' : 'I',
            sn: subTotal.sn > 24 ? 'N' : 'S',
            ft: subTotal.ft > 24 ? 'T' : 'F',
            jp: subTotal.jp > 24 ? 'P' : 'J',
            final: (subTotal.ie > 24 ? 'E' : 'I')+(subTotal.sn > 24 ? 'N' : 'S')+(subTotal.ft > 24 ? 'T' : 'F')+(subTotal.jp > 24 ? 'P' : 'J')
        })
    },[subTotal])

    return (
        <div className={'container mx-auto pb-8'}>
            <Header />
            <h1 className={'text-5xl md:text-8xl mb-4 text-center'}>OEJTS</h1>
            <p className={'text-center mb-8'}>Open Extended Jungian Type Scales v1.2</p>
            {oejts.map(({left, right},index) =>(
                <div key={index} className={'grid md:grid-cols-3 py-3 align-middle flex'}>
                    <div className={'md:text-right px-6 md:px-0'}>{capitalize(left)}</div>
                    <Option key={index} index={index} updateInput={(e)=>updateInput(e)} inputs={inputs} />
                    <div className={'text-right md:text-left px-6 md:px-0'}>{capitalize(right)}</div>
                </div>
            ))}
            {
                !isNaN(subTotal.total) &&
                    <div className={'flex align-middle justify-center'}>
                        <h2 className={'text-8xl text-center my-6'}>{results.final}</h2>
                        <i className={'la la-redo-alt border rounded-full p-2 ml-4 self-center cursor-pointer'} onClick={reset} />
                    </div>
            }
            <Footer />
        </div>
    )
}

export default Oejts