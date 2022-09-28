import func_desc from "../../data/func_desc.json";

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

const Slots = ({updateInput}) => {
    return (
        <div className={'mt-6'}>
            <p className={''}>Find types with cognitive functions on the,</p>
            <select name={'1'} placeholder={'1st function'}
                    className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'}
                    onChange={updateInput}>
                <FunctionsList func={'Dominant function'}/>
            </select>
            <select name={'2'} placeholder={'2nd function'}
                    className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'}
                    onChange={updateInput}>
                <FunctionsList func={'Auxiliary function'}/>
            </select>
            <select name={'3'} placeholder={'3rd function'}
                    className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'}
                    onChange={updateInput}>
                <FunctionsList func={'Tertiary function'}/>
            </select>
            <select name={'4'} placeholder={'4th function'}
                    className={'dark:bg-gray-800 md:w-2/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mr-3 mt-2'}
                    onChange={updateInput}>
                <FunctionsList func={'Inferior function'}/>
            </select>
            {/*:<input name={'any'} placeholder={'Any place'} className={'md:w-1/12 w-1/5 border border-gray-400 focus:border-blue-500 outline-0 rounded p-3 mx-3 mt-2'} onChange={updateInputAny}/>*/}
        </div>
    )
}

export default Slots