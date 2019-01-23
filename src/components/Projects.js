import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import FaList from 'react-icons/lib/md/list'
import FaMinus from 'react-icons/lib/fa/minus';
import FaRight from 'react-icons/lib/md/chevron-right';

import AllProjects from '../pages/data/images.json'

const ProjectsContainer = styled.div`
    padding:45px;
    background-color:#f7f7f7;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MoreProjectsContainer = styled.div`
    background-color:#f7f7f7;
    display: flex;
    flex-wrap: wrap;
    transition: 1s;
`;

const ShowMoreLinkContainer = styled.div`
    text-align:center;
    width:100%;
    padding-top:20px;
`;

const ProjectsTitle = styled.h1`
   font-family: Lato-light, Helvetica, Arial, sans-serif;    
   text-transform: capitalize;
    text-align:center;
    font-size: 26px;
    font-weight: 700;
    text-transform: capitalize;
    color:#222222;
    width:100%;
    padding-bottom:10px;
    letter-spacing: 1px;
`;

const PhotosContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    flex-flow: wrap;
    justify-content: center;
    margin: 0 auto;
    
`;

const SingleImg = styled.div`
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const ShowMoreButton = styled.button`
    height: 50px;
    width: 200px;
    background-color: #c7c7c7;
    color: #716f6f;
    font-size: 14px;
    font-family: 'Open sans';
    opacity: 0.6;
    border: 1px solid #c7c7c7;

    &:hover{
        background-color:#505050;
        color:#f7f7f7;
        cursor:pointer;
        transition: 0.3s;
        opacity: 1.0;
    }
`;

const Img = styled.img`
    background-color: #f7f7f7;
    vertical-align: middle;
    position: relative;
    width: 350px;
    height: 275px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: fill;
    margin-bottom:0px;
    padding: 10px;
    
    &:hover{
        cursor:pointer;
    }
`;

const FilterContainer = styled.div`
    display:inline;
    font-size:20px;
    text-align:center;
    width:100%;
    padding-bottom:25px;
`;

const Filter = styled.a`
    font-family:Lato-light;
    display:inline;
    font-size:17px;
    text-align:center;
    padding:10px;
    color:#828282;
    text-transform:uppercase;

    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }

    &:active{
        text-decoration:underline;
    }
`;

const LinkContainer = styled.div`
    position: absolute;
`;


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            showAllProjects: false,
            filter: 'work',
            projectsData: AllProjects,
            maxItems: 15,
        }
    }

    showProjects = () => {
        const { maxItems, showAllProjects } = this.state;
        showAllProjects ? this.setState({ maxItems: 14, showAllProjects: !this.state.showAllProjects, }) : this.setState({ maxItems: 100 });
        this.setState({
            showAllProjects: !this.state.showAllProjects,
        })
    }

    filterItems = (filter) => {
        this.setState({ filter });
        console.log(this.state.filter)
    }

    render() {
        const { maxItems, showAllProjects } = this.state;

        console.log(maxItems);

        return (
            <ProjectsContainer>
                <ProjectsTitle>Portfolio</ProjectsTitle>
                <FilterContainer>
                    <Filter onClick={() => this.filterItems('work')}>Web</Filter>
                    <Filter onClick={() => this.filterItems('app')}>Apps</Filter>
                    <Filter onClick={() => this.filterItems('project')}>Projecten</Filter>
                </FilterContainer>

                <PhotosContainer>
                    {this.state.projectsData.images.slice(0, maxItems).map((project, i) => (
                        this.state.filter === project.category && (
                            <SingleImg>
                                {console.log(project.category)}
                                <Img className="imgClass" src={project.src} />
                                <LinkContainer>
                                    <Link to={project.name}>
                                        <ShowMoreButton className="showmore">Lees meer <FaRight /></ShowMoreButton>
                                    </Link>
                                </LinkContainer>
                            </SingleImg>
                        )
                    ))}
                </PhotosContainer>
                <ShowMoreLinkContainer>
                    <ShowMoreButton
                        onClick={this.showProjects}
                    >
                        {!this.state.showAllProjects
                            ? (<span> <FaList size={20} /> Lees meer</span>)
                            : (<span> <FaMinus size={18} /> Lees minder</span>)}
                    </ShowMoreButton>
                </ShowMoreLinkContainer >
            </ProjectsContainer >
        );
    }
}

export default Projects;
