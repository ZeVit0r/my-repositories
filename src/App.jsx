import { useEffect, useState } from 'react'

import './styles/global.scss'
import './styles/header.scss'

import LogoPrincipal from './assets/logo-principal.svg'
import LogoSecundary from './assets/logo-secundary.svg'
import IconGithub from './assets/icon-github.svg'
import IconLinkedin from './assets/icon-linkedin.svg'
import IconGmail from './assets/icon-gmail.svg'

import { RepositoryItem } from './components/RepositoryItem'

export function App() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/zevit0r/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return(
        <>
            <header>
                <div className="container-icons">
                    <img 
                        src={IconGithub} 
                        alt="ícone para acessar o github do criador!"
                        className="logo-principal"
                        />
                    <img 
                        src={IconLinkedin} 
                        alt="ícone para acessar o linkedin do criador!"
                        className="logo-principal"
                        />
                    <img 
                        src={IconGmail} 
                        alt="ícone para acessar o gmail do criador!"
                        className="logo-principal"
                        />
                </div>

                <div className="principal-header">
                    <img 
                        src={LogoPrincipal} 
                        alt="logo principal do site!"
                        className="logo-principal"
                        />
                    <img 
                        src={LogoSecundary} 
                        alt="logo secundária do site!"
                        className="logo-secundary"
                        />
                </div>
                
            </header>

            <main className="container-repositories">
                {repositories.map( repo =>(
                    <RepositoryItem
                        key={repo.name}
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        owner={repo.owner?.login}
                        ownerImg={repo.owner?.avatar_url}
                        ownerUrl={repo.owner?.html_url}
                    />
                ))}
            </main>
        </>
    )
}