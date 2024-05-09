import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//pages:
import Home from '../pages/Home.jsx'
import PageWord from '../pages/PageWord.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/palavra",
        element: <PageWord />,
    },
]);