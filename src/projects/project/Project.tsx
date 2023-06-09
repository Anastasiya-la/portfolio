import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href="#" className={style.button}>View Project</a>
            </div>
            <h4 className={style.title}>{props.title}</h4>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;