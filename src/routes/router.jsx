import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Campaigns from '../Components/Campaigns/Campaigns';
import AddCampaign from '../Components/AddCampaign/AddCampaign';
import MyCampaign from '../Components/MyCampaign/MyCampaign';
import MyDonations from '../Components/MyDonations/MyDonations';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import UpdateCampaign from '../Components/UpdateCampaign/UpdateCampaign';

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
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/addCampaign",
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>,
            },
            {
                path: "/myCampaign",
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path: "/myDonations",
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
            },
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
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            // {
            //     path: "/forgot-password",
            //     element: <ForgotPassword></ForgotPassword>,
            // },
        ]
    }
])

export default router;