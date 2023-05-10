
import React from 'react';
import Header from './components/header/Header.js';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Bookmark from './components/bookmark/Bookmark';
import Home from './components/home/Home';
import News from './components/news/News';
import "./index.css"

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className='app-layout-container'>
          <Outlet />
        </div>
      </div>
    </Provider>
  );
}



const appRouter = createBrowserRouter(
  [{
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/bookmark",
        element: <Bookmark />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/news/:sourceName",
        element: <News />
      },
    ]
  }


  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
