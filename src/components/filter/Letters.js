const Letters = ({updateInput}) => {
    return (<div className={'inline-block'}>
        <div className={'btn-group inline-block mr-4'}>
            <p className={'my-6'}>Mind</p>
            <input name={'1'} type={"radio"} value={'I'} id={'I'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'I'}>I</label>
            <input name={'1'} type={"radio"} value={'E'} id={'E'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'E'}>E</label>
            <input name={'1'} type={"radio"} value={'X'} id={'x1'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x1'}>X</label>
        </div>
        <div className={'btn-group inline-block mr-4'}>
            <p className={'my-6'}>Energy</p>
            <input name={'2'} type={"radio"} value={'N'} id={'N'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'N'}>N</label>
            <input name={'2'} type={"radio"} value={'S'} id={'S'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'S'}>S</label>
            <input name={'2'} type={"radio"} value={'X'} id={'x2'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x2'}>X</label>
        </div>
        <div className={'btn-group inline-block mr-4'}>
            <p className={'my-6'}>Nature</p>
            <input name={'3'} type={"radio"} value={'T'} id={'T'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'T'}>T</label>
            <input name={'3'} type={"radio"} value={'F'} id={'F'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'F'}>F</label>
            <input name={'3'} type={"radio"} value={'X'} id={'x3'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x3'}>X</label>
        </div>
        <div className={'btn-group inline-block mr-4'}>
            <p className={'my-6'}>Tactics</p>
            <input name={'4'} type={"radio"} value={'P'} id={'P'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'P'}>P</label>
            <input name={'4'} type={"radio"} value={'J'} id={'J'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer mr-1'}
                   htmlFor={'J'}>J</label>
            <input name={'4'} type={"radio"} value={'X'} id={'x4'} className={'hidden'} onChange={updateInput}/>
            <label className={'border border-gray-400 rounded px-6 py-3 cursor-pointer'} htmlFor={'x4'}>X</label>
        </div>
    </div>)
}

export default Letters