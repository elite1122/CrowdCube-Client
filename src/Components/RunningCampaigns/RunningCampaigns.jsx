import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';


const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch running campaigns (limited to 6 by the backend)
        fetch('http://localhost:5000/runningCampaigns')
            .then((res) => res.json())
            .then((data) => setCampaigns(data))
            .catch((err) => console.error('Error fetching campaigns:', err));
    }, []);

    return (
        <div className="container mx-auto py-10 w-11/12">
            <h1 className="text-4xl font-bold text-center mb-6">Running Campaigns</h1>
            {campaigns.length === 0 ? (
                <p className="text-center">No running campaigns found!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign._id}
                            className="card shadow-xl pt-5"
                            data-tooltip-id={`tooltip-${campaign._id}`} // Unique ID for each tooltip
                            data-tooltip-content={`Campaign created by ${campaign.name}. Min Donation: ${campaign.minimumDonationAmount}TK`}
                        >
                            <figure className='h-64 px-6'>
                                <img
                                    src={campaign.photo}
                                    alt={campaign.campaignTitle}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{campaign.campaignTitle}</h2>
                                <p className="text-sm">{campaign.description.slice(0, 100)}...</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-primary font-semibold">
                                        Min Donation: {campaign.minimumDonationAmount}TK
                                    </p>
                                    <p className="text-secondary">
                                        Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                                    </p>
                                </div>
                                <button
                                    className="btn btn-primary w-full mt-4"
                                    onClick={() => navigate(`/campaign/${campaign._id}`)} // Correct path
                                >
                                    See More
                                </button>
                            </div>
                            <Tooltip id={`tooltip-${campaign._id}`} place="top" effect="solid" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RunningCampaigns;
