import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';
import Social from "./Social/Social";

const Footer = () => {
    const socials = [{}, {}, {}, {}]

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerTitle}>Anastasiya Rabetskaya</h2>
                <div className={style.socialsContainer}>
                    {socials.map(s => <Social/>)}
                </div>
                <span className={style.rights}> ©2023 Все права защищены</span>

            </div>
        </div>
    );
};

export default Footer;