import React from 'react'
import { ProjectContainer, ProjectsButton, ProjectsCard, ProjectsDesc, ProjectsHeading, ProjectsImg, ProjectsInfo, ProjectsTitle, ProjectsWrapper, ProjectLink} from './ProjectsElements';

const Products = ({heading, data}) => {
  return (
      <ProjectContainer>
          <ProjectsHeading>{heading}</ProjectsHeading>
            <ProjectsWrapper>
                {data.map((project, index) => {
                    return (
                        <ProjectsCard key={index}>
                            <ProjectsImg src={project.img} alt={project.alt}/>
                                <ProjectsInfo>
                                    <ProjectsTitle>{project.name}</ProjectsTitle>
                                    <ProjectsDesc>{project.desc}</ProjectsDesc>
                                    <ProjectsButton href={project.url} target="_blank">{project.button}</ProjectsButton>
                                </ProjectsInfo>
                        </ProjectsCard>
                    )
                })}
            </ProjectsWrapper>
      </ProjectContainer>
);
};

export default Products