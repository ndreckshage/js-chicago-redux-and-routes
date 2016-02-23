import appReducer, { initialState } from 'reducer';

export const server = { port: 8080 };

export const universal = {
  redux: true,
  reducers: { app: appReducer },
  initialState: { app: initialState },
  reduxDevTools: true,
  reactRouter: true,
  reactRouterRedux: false,
  groundControl: false,
};
