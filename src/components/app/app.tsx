import { FC, StrictMode, useEffect } from 'react';

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
            <div className='app'>
                <AppNav />
                <AppRouter />
            </div>
        </StrictMode>
    );
};
