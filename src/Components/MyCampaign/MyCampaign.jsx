import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';

const MyCampaign = () => {
    const { user,loading } = useContext(AuthContext);
    const [myCampaigns, setMyCampaigns] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myCampaign?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyCampaigns(data))
            .catch((error) => console.error('Error fetching user campaigns:', error));
    }, [user.email]);

    if(loading){
        return <Loading></Loading>;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this campaign!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaigns/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your campaign has been deleted.', 'success');
                            setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">My Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border p-2">Title</th>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">Min Donation</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCampaigns.map((campaign) => (
                            <tr key={campaign._id} className="text-center hover:bg-gray-100">
                                <td className="border p-2">{campaign.campaignTitle}</td>
                                <td className="border p-2">{campaign.campaignType}</td>
                                <td className="border p-2">{campaign.minimumDonationAmount}TK</td>
                                <td className="border p-2 flex gap-2 justify-center ">
                                    <Link to={`/updateCampaign/${campaign._id}`}>
                                        <button className="btn btn-sm btn-warning mr-2">Update</button>
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(campaign._id)}
                                    >
                                        Delete
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

export default MyCampaign;
