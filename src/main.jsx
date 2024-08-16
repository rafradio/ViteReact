import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from "react-router-dom";
import {useParams} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { Provider } from 'react-redux';
import store from './store/store';

function ProfilePage() {
  let { contactId } = useParams();
  return contactId;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact element={<ProfilePage />}/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);