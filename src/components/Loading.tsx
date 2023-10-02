import React from 'react'

interface Props {}

const Loading = (props: Props) => {
    const {} = props
// console.log('still loading...');
    return(<span className='grid justify-center mx-auto'>
        <h1>
            Data Still Loading...
        </h1>
        <div className="spinner-box">
        <div className="circle-border">
            <div className="circle-core"></div>
        </div>  
        </div>
    </span>)
}

export default Loading;
