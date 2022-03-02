import React from 'react'

import './styles.scss'

export function RepositoryItem(props) {
    return(
        <div className="container-item">
            <div className="informations">
                <p className="name-repository"><b>{props.name}</b></p>
                <p className="description-repository">Description: {props.description ? props.description : 'without description...'}</p>
                <p className="language-repository"><b>{props.language}</b></p>
            </div>
            <div className="owner">
                <p className="owner-name"><b>Owner:</b> {props.owner}</p>
                <a 
                    href={props.ownerUrl}
                    >
                    <img 
                        src={props.ownerImg} 
                        alt="imagem do criador do repositorio!" 
                        className="img-owner" 
                        />
                </a>
            </div>

            <button></button>
        </div>
    )
}
