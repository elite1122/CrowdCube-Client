import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            // Fetch donations by user email
            fetch(`http://localhost:5000/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setDonations(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching donations:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    if(loading){
        return <Loading></Loading>;
    }

    if (donations.length === 0) {
        return <p className="text-center py-10 min-h-screen">No donations found!</p>;
    }

    return (
        <div className="container mx-auto py-10 w-11/12 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8">My Donations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donations.map((donation) => (
                    <div
                        key={donation._id}
                        className="border border-gray-200 rounded-lg shadow-lg p-4"
                    >
                        <img
                            src={donation.photo}
                            alt={donation.campaignTitle}
                            className="rounded-lg mb-4 w-full h-48 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-2">
                            {donation.campaignTitle}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400">
                            <strong>Campaign Type: </strong>{' '}
                            {donation.campaignType}
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            <strong>Description: </strong>{' '}
                            {donation.description}
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            <strong>Donated Amount: </strong>{' '}
                            {donation.minimumDonationAmount} TK
                        </p>
                        <p className="text-gray-700 dark:text-gray-400">
                            <strong>Deadline: </strong>{' '}
                            {donation.deadline
                                ? new Date(donation.deadline).toLocaleDateString()
                                : 'N/A'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyDonations;
