import React from 'react'

import './styles.scss'
import IconGo from '../../assets/icon-go.svg'

export function Button(props) {
    return(
        <a href={props.repoUrl} className="btnUrl" target="_blank">
            <img src={IconGo} alt="link para o repositorio!" />
        </a>
    )
}