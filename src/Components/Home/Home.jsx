import React from 'react';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="mb-8">
                <Banner></Banner>
            </section>
            {/* Running Campains */}
            <section>
                <RunningCampaigns></RunningCampaigns>
            </section>
        </div>
    );
};

export default Home;