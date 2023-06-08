import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>
                    Hi
                </span>
                <h1>
                    I'm Anastasiya Rabetskaya!
                </h1>
                <p>Front-end Developer</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
