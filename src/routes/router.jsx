import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            // {
            //     path: "/donation-campaigns",
            //     element: <DonationCampaigns></DonationCampaigns>,
            // },
            // {
            //     path: "/donation-campaigns/:id",
            //     element: (
            //         <PrivateRoute>
            //             <Details></Details>
            //         </PrivateRoute>
            //     ),
            //     loader: async ({ params }) => {
            //         const response = await fetch("/campaignsInfo.json");
            //         const data = await response.json();
            //         return data.find((campaign) => campaign.id === parseInt(params.id));
            //     },
            // },
            // {
            //     path: "/how-to-help",
            //     element: <HowToHelp></HowToHelp>,
            // },
            // {
            //     path: "/dashboard",
            //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            // },
            // {
            //     path: "/update-profile",
            //     element: (
            //         <PrivateRoute>
            //             <UpdateProfile></UpdateProfile>
            //         </PrivateRoute>
            //     ),
            // },
            // {
            //     path: "/login",
            //     element: <Login></Login>,
            // },
            // {
            //     path: "/register",
            //     element: <Register></Register>,
            // },
            // {
            //     path: "/forgot-password",
            //     element: <ForgotPassword></ForgotPassword>,
            // },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            }
        ]
    }
])

export default router;