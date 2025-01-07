
const ContributorStories = () => {
    return (
        <div className="contributor-stories py-10 rounded-2xl">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Contributor Stories</h2>
                <p className="text-lg lg:text-xl mx-auto mb-6 dark:text-gray-400">
                    Hear from our amazing Contributors who are making an impact every day.
                </p>
                <div className="flex justify-center gap-6 flex-col lg:flex-row w-full">
                    <div className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Rasheduzzaman Elite"
                                    src="https://i.ibb.co/zmGN20L/1652934627991.jpg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Rasheduzzaman Elite</h3>
                        <p className="dark:text-gray-400">“Helping others has been the most rewarding experience of my life.”</p>
                    </div>
                    <div className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Zion Mezba"
                                    src="https://i.ibb.co/MsfvTPt/65642391.jpg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Zion Mezba</h3>
                        <p className="dark:text-gray-400">“It's incredible to see how a small act of kindness can change a life.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributorStories;