import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';
import ContributorStories from '../ContributorStories/ContributorStories';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="mb-8">
                <Zoom><Banner></Banner></Zoom>
            </section>
            {/* Running Campains */}
            <section>
                <RunningCampaigns></RunningCampaigns>
            </section>
            <section>
                <ContributorStories></ContributorStories>
            </section>
            <section>
                <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
            </section>
        </div>
    );
};

export default Home;