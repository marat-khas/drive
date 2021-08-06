import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { Details } from '@pages/details';
import { Main } from '@pages/main';
import { Order } from '@pages/order';

export const AppRouter: FC = () => (
    <Switch>
        <Route path={ROUTES.MAIN} exact component={Main} />
        <Route path={ROUTES.ORDER} component={Order} />
        <Route path={`${ROUTES.DETAILS}/:orderId`} component={Details} />
    </Switch>
);
