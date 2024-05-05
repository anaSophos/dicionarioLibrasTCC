import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
//pages:
import Home from '../pages/Home.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);