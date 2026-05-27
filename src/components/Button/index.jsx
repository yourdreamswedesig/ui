import React from 'react'

const index = (props) => {
    const { label = 'click me', type = 'primary', size = 'medium', click = () => { } } = props;

    const buttonType = {
        'primary': 'bg-primary text-white'
    }
    const buttonSize = {
        'medium': 'text-sm px-[2rem] py-[1rem]'

    }
    return (
        <button className={`${buttonType[type]} ${buttonSize[size]} rounded-full shadow-lg hover:scale-105 transition cursor-pointer`} onClick={click}>{label}</button>
    )
}

export default index;