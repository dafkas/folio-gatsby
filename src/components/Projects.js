import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import AllProjects from '../pages/data/images.json'

import FaList from 'react-icons/lib/md/list'
import FaRight from 'react-icons/lib/md/chevron-right';

const ProjectsContainer = styled.div`
    padding:45px;
    background-color:#f7f7f7;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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

`;

const SingleImg = styled.div`
    cursor:pointer;
    
`;


const ShowMoreButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: transparent;
  color: #333;
  font-size: 14px;
  font-family: 'Open sans';
    opacity: 0.6;
    border:none;
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
    float: left;
    width: 337px;
    height: 280px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit:scale-down;
    margin-bottom:0px;
    

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





class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            showAllProjects: false,
            filter: 'all',
            projectsData: AllProjects
        }
        // const images = [{
        //     name: 'fedex', url: ''
        //     RecnitionImg,
        //     BlogImg,
        //     ApiImg,
        //     CalendarImg,
        //     GroceriesImg,
        //     GalleryImg,
        //     ToiletRollImg,
        //     HippekipImg,
        //     SrcImg,
        //     CvMeisjeImg,
        //     ArbeidsbelMiddelaarImg,
        //     RijJbImg,
        //     BettershapedImg,
        //     PenozeVisualsImg,
        //     FlashtuningImg
        // }];
        console.log(this.state.projectsData)
    }

    _showProjects() {
        if (!this.state.showAllProjects) {
            return (
                <ShowMoreLinkContainer>
                    <ShowMoreButton onClick={(e) => this.setState({ showAllProjects: true })}><FaList size={20} /> Lees meer </ShowMoreButton>
                </ShowMoreLinkContainer >
            )
        } else {
            return (
                <ShowMoreLinkContainer>
                    <ShowMoreButton onClick={(e) => this.setState({ showAllProjects: false })}>Lees minder - </ShowMoreButton>
                </ShowMoreLinkContainer >
            )
        }

    }

    _filterProjects() {
        return (
            <FilterContainer>
                {
                    this.state.filter == 'all' && <FilterContainer>
                        <Filter><u>Alles</u></Filter>
                        <Filter onClick={() => this.setState({ filter: 'web' })}>Web</Filter>
                        <Filter onClick={() => this.setState({ filter: 'projects' })}>Projecten</Filter>
                    </FilterContainer> ||
                    this.state.filter == 'web' && <FilterContainer>
                        <Filter onClick={() => this.setState({ filter: 'all' })}>Alles</Filter>
                        <Filter><u>Web</u></Filter>
                        <Filter onClick={() => this.setState({ filter: 'projects' })}>Projecten</Filter>
                    </FilterContainer> ||
                    this.state.filter == 'projects' && <FilterContainer>
                        <Filter onClick={() => this.setState({ filter: 'all' })}>Alles</Filter>
                        <Filter onClick={() => this.setState({ filter: 'web' })}>Web</Filter>
                        <Filter><u>Projecten</u></Filter>
                    </FilterContainer>
                }
            </FilterContainer>
        )
    }

    render() {
        return (
            <ProjectsContainer>
                <ProjectsTitle>Portfolio</ProjectsTitle>
                {this._filterProjects()}

                {this.state.projectsData.images.map((project) => (
                    <PhotosContainer>
                        <div>
                            <Img className="imgClass" src={project.src} />
                            <Link to={project.name}><ShowMoreButton className="showmore">Lees meer <FaRight /></ShowMoreButton></Link>
                        </div>
                    </PhotosContainer>
                ))}

                {/* {
                    this.state.showAllProjects && <MoreProjectsContainer>
                        <PhotosContainer>
                            <Img className="imgClass" src={CalendarImg} />
                            <Img className="imgClass" src={RijJbImg} />
                            <Img className="imgClass" src={PenozeVisualsImg} />
                            <Img className="imgClass" src={SrcImg} />
                        </PhotosContainer>
                        <PhotosContainer>
                            <Img className="imgClass" src={ArbeidsbelMiddelaarImg} />
                            <Img className="imgClass" src={ToiletRollImg} />
                            <Img className="imgClass" src={BlogImg} />
                            <Img className="imgClass" src={GalleryImg} />
                        </PhotosContainer>
                        <div className='container'>
                            <Img className='image' src={GalleryImg} />
                            <div className='overlay'>
                                <div class="text">Hello World</div>
                            </div>
                        </div>
                    </MoreProjectsContainer>
                } */}
                {this._showProjects()}
            </ProjectsContainer >
        );
    }
}

export default Projects;
