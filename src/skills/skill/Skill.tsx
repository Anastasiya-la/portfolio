import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className={style.description}>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;