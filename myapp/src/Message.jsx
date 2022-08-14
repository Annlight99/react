import React from 'react'

export default function message(props) {
    return (
        <div>
            <h3 style={{ fontsize: '16px', color: 'red' }}>Добрый день, {props.name}</h3>
        </div>
    )
}

