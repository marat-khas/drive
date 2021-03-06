import { FC, StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppNav } from '@components/app-nav';
import { AppRouter } from '@components/app-router';
import { Loader } from '@components/loader';
import { Modal } from '@components/modal';
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
                        <AppNav />
                        <AppRouter />
                        <Modal />
                    </div>
                    <Loader />
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
};
