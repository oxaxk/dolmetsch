// File: src/router/config.tsx
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import Datenschutz from '../pages/datenschutz/page';
import Impressum from '../pages/impressum/page';
import About from '../pages/about/page';
import Kontakt from '../pages/kontakt/page';
import Leistungen from '../pages/leistungen/page';
import Bewerbung from '../pages/bewerbung/page';
import CookieSettingsPage from '../pages/cookie/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/ueber-uns',
    element: <About />,
  },
  {
    path: '/leistungen',
    element: <Leistungen />,
  },
  {
    path: '/kontakt',
    element: <Kontakt />,
  },
  {
    path: '/bewerbung',
    element: <Bewerbung />,
  },
  {
    path: '/cookie',
    element: <CookieSettingsPage />,
  },
  {
    path: '/datenschutz',
    element: <Datenschutz />,
  },
  {
    path: '/impressum',
    element: <Impressum />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;