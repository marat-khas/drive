import { FC, StrictMode, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppNav } from '@components/app-nav';
import { AppRouter } from '@components/app-router';
import { VHSet } from '@utils/vh';

import './app.scss';

export const App: FC = () => {
    useEffect(() => {
        VHSet();
        const resizeHandler = () => {
            VHSet();
        };
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <StrictMode>
            <BrowserRouter basename={PUBLIC_PATH}>
                <div className='app'>
                    <AppNav />
                    <AppRouter />
                </div>
            </BrowserRouter>
        </StrictMode>
    );
};
