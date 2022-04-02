import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'

export const ProjectLink = ({url, children}) => {
    return (
        <a href={url}>
            {children}
        </a>
    )
}

export const App = () => (
    <ProjectLink url={projectsData.url}></ProjectLink>
)

export const projectsData = [{
    img: project1,
    alt: 'Projeto Pokedex',
    name: 'Projeto Pokedex',
    desc: 'Projeto criado em HTML, CSS e JS.',
    button: 'Ver projeto',
    url: 'https://antoniowingert.github.io/pizzariawingert/'
},{
    img: project2,
    alt: 'Projeto Pizzaria',
    name: 'Web-site Pizzaria',
    desc: 'Projeto criado em React.',
    button: 'Ver projeto',
    url: 'https://antoniowingert.github.io/pizzariawingert/'
}]
