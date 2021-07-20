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
    const navList = [
        {
            to: ROUTES.ORDER,
            label: 'ПАРКОВКА',
        },
        {
            to: ROUTES.ORDER,
            label: 'СТРАХОВКА',
        },
        {
            to: ROUTES.ORDER,
            label: 'БЕНЗИН',
        },
        {
            to: ROUTES.ORDER,
            label: 'ОБСЛУЖИВАНИЕ',
        },
    ];
    return (
        <aside className={classes}>
            <button
                className='app-nav__btn'
                onClick={() => setOpen(!open)}
                type='button'
            >
                <span />
            </button>
            <div className='app-nav__lang'>
                <button type='button'>Eng</button>
            </div>
            <div className='app-nav__menu'>
                <nav className='app-nav__list'>
                    <ul>
                        {navList.map((item) => (
                            <li>
                                <Link
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
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
        </aside>
    );
};
