import { FC, StrictMode, useEffect } from 'react';

import { VHSet } from '@utilities/vh';

import './app.scss';

export const App: FC = () => {
    useEffect(() => {
        VHSet();
        window.addEventListener('resize', VHSet);
    }, []);

    return (
        <StrictMode>
            <div className='app'>Начало</div>
        </StrictMode>
    );
};
