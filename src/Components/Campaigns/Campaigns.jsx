import { useLoaderData } from "react-router-dom";

const Campaigns = () => {
    const campaigns = useLoaderData();  // Load campaigns data from loader

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">All Campaigns</h1>
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
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign._id} className="text-center hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{campaign.campaignTitle}</td>
                                <td className="border border-gray-300 p-2">{campaign.campaignType}</td>
                                <td className="border border-gray-300 p-2">{campaign.name}</td>
                                <td className="border border-gray-300 p-2">{campaign.minimumDonationAmount}TK</td>
                                <td className="border border-gray-300 p-2">{new Date(campaign.deadline).toLocaleDateString()}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => alert(`See more details for: ${campaign.campaignTitle}`)}
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
