import { Route } from 'react-router-dom';
import BaseLayout from '../layout/base';
import Demo from '../pages/demo';
import SignIn from '../pages/user/signIn';
import SignUp from '../pages/user/signUp';
import NotFound from '../pages/notFound';

import type { RouteObject } from 'react-router-dom';

// 路由配置对象
const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'demo',
        element: <Demo />,
      },
    ],
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// 递归生成路由
const generateRoutes = (routes: RouteObject[]): React.ReactNode => {
  return routes?.map((route) =>
    route?.children ? (
      <Route index={route.index} key={`${route.path}`} path={route.path} element={route.element}>
        {generateRoutes(route.children)}
      </Route>
    ) : (
      <Route index={route.index} key={`${route.path}`} path={route.path} element={route.element} />
    )
  );
};

export { generateRoutes, routes };
