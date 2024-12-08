import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";

const Campaigns = () => {
    const campaignsData = useLoaderData(); // Load campaigns data from loader
    const [campaigns, setCampaigns] = useState(campaignsData); // State to manage campaigns
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (campaignsData) {
            setCampaigns(campaignsData);
            setLoading(false); // Set loading to false after data is loaded
        }
    }, [campaignsData]);

    // Function to sort campaigns in ascending order
    const handleSort = () => {
        const sortedCampaigns = [...campaigns].sort(
            (a, b) => a.minimumDonationAmount - b.minimumDonationAmount
        );
        setCampaigns(sortedCampaigns);
    };

    if(loading){
        return <Loading></Loading>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">All Campaigns</h1>
            <div className="flex justify-between items-center mb-4">
                <button
                    className="btn btn-primary"
                    onClick={handleSort}
                >
                    Sort (Ascending)
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Title</th>
                            <th className="border border-gray-300 p-2">Type</th>
                            <th className="border border-gray-300 p-2">Creator</th>
                            <th className="border border-gray-300 p-2">Min Donation</th>
                            <th className="border border-gray-300 p-2">Deadline</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign._id} className="text-center hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{campaign.campaignTitle}</td>
                                <td className="border border-gray-300 p-2">{campaign.campaignType}</td>
                                <td className="border border-gray-300 p-2">{campaign.name}</td>
                                <td className="border border-gray-300 p-2">{campaign.minimumDonationAmount}TK</td>
                                <td className="border border-gray-300 p-2">{new Date(campaign.deadline).toLocaleDateString()}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => navigate(`/campaign/${campaign._id}`)}
                                    >
                                        See More
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Campaigns;
