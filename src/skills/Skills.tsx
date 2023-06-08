import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {

    const skills = [
        {title: 'HTML', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'},
        {title: 'CSS', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'},
        {title: 'JS', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skills.map(s => <Skill title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;