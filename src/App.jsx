import { useEffect, useState } from 'react'

import './styles/global.scss'
import './styles/header.scss'

import LogoSecundary from './assets/logo-secundary.svg'
import IconGithub from './assets/icon-github.svg'
import IconLinkedin from './assets/icon-linkedin.svg'
import IconGmail from './assets/icon-gmail.svg'
import Loading from './assets/loading.svg'

import { RepositoryItem } from './components/RepositoryItem'

import {LogoPrincipal} from './components/LogoPrincipal'

export function App() {

    const [showRepositories, setShowRepositories] = useState([])
    const [repositories, setRepositories] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetch('https://api.github.com/users/zevit0r/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        
    }, [])

    useEffect(()=>{
        setShowRepositories(repositories.filter((repo)=>{
            return repo.name.toUpperCase().indexOf(search.toUpperCase()) != -1
            
        }))
        
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
            <header>
                <div className="container-icons">
                    <a href="https://github.com/ZeVit0r" target="_blank">
                        <img 
                            src={IconGithub} 
                            alt="ícone para acessar o github do criador!"
                            className="icons"
                            />
                    </a>
                    <a href="https://www.linkedin.com/in/zevit0r/" target="_blank">
                        <img 
                            src={IconLinkedin} 
                            alt="ícone para acessar o linkedin do criador!"
                            className="icons"
                            />
                    </a>
                    <a href="https://mailto:z3.vit07@gmail.com" target="_blank">
                        <img 
                            src={IconGmail} 
                            alt="ícone para acessar o gmail do criador!"
                            className="icons"
                            />
                    </a>
                </div>

                <div className="principal-header">
                    <div className="logo-principal">
                        <LogoPrincipal />
                    </div>
                    <img 
                        src={LogoSecundary} 
                        alt="logo secundária do site!"
                        className="logo-secundary"
                        />
                </div>
                
            </header>

            <main className="container-repositories">

                <input 
                    type="text" 
                    placeholder="Search a repository..."
                    value={search}
                    onChange={(e) => handleChange(e)}
                    />

                {
                    search==''
                    ?
                    repositories.map( repo =>(
                        <RepositoryItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            owner={repo.owner?.login}
                            ownerImg={repo.owner?.avatar_url}
                            ownerUrl={repo.owner?.html_url}
                            repoUrl={repo.html_url}
                        />
                    ))
                    :
                    showRepositories.map( repo =>(
                        <RepositoryItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            owner={repo.owner?.login}
                            ownerImg={repo.owner?.avatar_url}
                            ownerUrl={repo.owner?.html_url}
                            repoUrl={repo.html_url}
                        />
                    ))
                }
            </main>
        </>
    )
}