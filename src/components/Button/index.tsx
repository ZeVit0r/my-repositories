interface ButtonProps {
    repoUrl: string;
}

import './styles.scss'
import IconGo from '../../assets/icon-go.svg'

export function Button(props: ButtonProps) {
    return(
        <a href={props.repoUrl} className="btnUrl" target="_blank">
            <img src={IconGo} alt="link para o repositorio!" />
        </a>
    )
}