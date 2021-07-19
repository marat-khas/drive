import { FC, StrictMode, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { VHSet } from '@utilities/vh';

import { Admin } from '@pages/admin';
import { Main } from '@pages/main';
import { Order } from '@pages/order';

import './app.scss';

export const App: FC = () => {
    useEffect(() => {
        VHSet();
        window.addEventListener('resize', VHSet);
    }, []);

    return (
        <StrictMode>
            <div className='app'>
                <BrowserRouter basename={PUBLIC_PATH}>
                    <Switch>
                        <Route path={ROUTES.MAIN} exact component={Main} />
                        <Route path={ROUTES.ORDER} component={Order} />
                        <Route path={ROUTES.ADMIN} component={Admin} />
                    </Switch>
                </BrowserRouter>
            </div>
        </StrictMode>
    )
};
