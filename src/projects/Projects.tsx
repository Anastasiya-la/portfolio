import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {

    const projects = [
        {title: 'Social Network', description: 'Brief description'},
        {title: 'Todolist', description: 'Brief description'}
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    {projects.map(p => <Project title={p.title} description={p.description}/>)}
                </div>
            </div>
        </div>
    );
}

export default Projects;