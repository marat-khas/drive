import { FC, StrictMode, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppNav } from '@components/app-nav';
import { AppRouter } from '@components/app-router';
import { VHSet } from '@utilities/vh';

import './app.scss';

export const App: FC = () => {
    useEffect(() => {
        VHSet();
        window.addEventListener('resize', () => VHSet());
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
