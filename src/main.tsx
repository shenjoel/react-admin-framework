import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App, ConfigProvider, theme } from 'antd';
import { BrowserRouter, Routes } from 'react-router-dom';
import { generateRoutes, routes } from './route';
import Auth from '@/components/auth';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense>
    <ConfigProvider theme={{ cssVar: true, algorithm: theme.compactAlgorithm }}>
      <App>
        <BrowserRouter>
          <Auth>
            <Routes>{generateRoutes(routes)}</Routes>
          </Auth>
        </BrowserRouter>
      </App>
    </ConfigProvider>
  </Suspense>
);
