import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { Main } from '@pages/main';
import { Order } from '@pages/order';

export const AppRouter: FC = () => (
  <BrowserRouter basename={PUBLIC_PATH}>
    <Switch>
      <Route path={ROUTES.MAIN} exact component={Main} />
      <Route path={ROUTES.ORDER} component={Order} />
    </Switch>
  </BrowserRouter>
)