import { FC, StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppNav } from '@components/app-nav';
import { AppRouter } from '@components/app-router';
import { AppWrapper } from '@components/app-wrapper';
import { store } from '@state/store';
import { VHSet } from '@utils/vh';

import './app.scss';

export const App: FC = () => {
    useEffect(() => {
        VHSet();
        const handleResize = () => {
            VHSet();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter basename={PUBLIC_PATH}>
                    <div className='app'>
                        <AppWrapper>
                            <AppNav />
                            <AppRouter />
                        </AppWrapper>
                    </div>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
};
