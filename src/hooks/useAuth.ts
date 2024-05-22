import { whiteRouter } from '@/constants';
import { type TAuthStore, useAuthStore } from '@/store/auth';
import { useCreation, useRequest } from 'ahooks';
import type { Service } from 'ahooks/lib/useRequest/src/types';
import { useLocation } from 'react-router-dom';

export type TAuthState = TAuthStore & { loading: boolean; isCompleted: boolean };

const useAuth = <T>(fetchAuth: Service<T, any[]>): TAuthState => {
  const state = useAuthStore((state) => state);
  const { pathname } = useLocation();
  // 是否白名单路由
  const isWhiteRouter = useCreation(
    () => !!whiteRouter.find((route) => route.toLocaleLowerCase() === pathname.toLocaleLowerCase()),
    [pathname]
  );
  // 鉴权请求
  const { loading } = useRequest(fetchAuth, {
    manual: isWhiteRouter || state.isCompleted || state.isAuthenticated,
    onSuccess({ data }) {
      if (data?.isAuthenticated) {
        state.authenticate();
      }
    },
  });

  return {
    ...state,
    isAuthenticated: state.isAuthenticated || isWhiteRouter,
    loading,
  };
};

export { useAuth };
