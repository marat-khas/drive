import { FC, StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppNav } from '@components/app-nav';
import { AppRouter } from '@components/app-router';
import { store } from '@state/store';
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
            <Provider store={store}>
                <BrowserRouter basename={PUBLIC_PATH}>
                    <div className='app'>
                        <AppNav />
                        <AppRouter />
                    </div>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
};
