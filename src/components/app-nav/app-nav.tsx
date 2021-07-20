import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import FacebookIco from '@assets/img/ico_facebook.svg';
import InstagramIco from '@assets/img/ico_instagram.svg';
import TelegramIco from '@assets/img/ico_telegram.svg';
import { ROUTES } from '@constants/routes';

import './app-nav.scss';

export const AppNav: FC = () => {
    const [open, setOpen] = useState(false);
    const classes = classNames('app-nav', { isOpen: open });
    return (
        <div className={classes}>
            <button
                className='app-nav__btn'
                onClick={() => setOpen(!open)}
                type='button'
            >
                <span />
            </button>
            <div className='app-nav__lang'>Eng</div>
            <div className='app-nav__menu'>
                <nav className='app-nav__list'>
                    <ul>
                        <li>
                            <Link to={ROUTES.ORDER} onClick={() => setOpen(false)}>ПАРКОВКА</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ORDER} onClick={() => setOpen(false)}>СТРАХОВКА</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ORDER} onClick={() => setOpen(false)}>БЕНЗИН</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ORDER} onClick={() => setOpen(false)}>ОБСЛУЖИВАНИЕ</Link>
                        </li>
                    </ul>
                </nav>
                <div className='app-nav__soc'>
                    <ul>
                        <li>
                            <a href='/'>
                                <TelegramIco />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <FacebookIco />
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <InstagramIco />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
