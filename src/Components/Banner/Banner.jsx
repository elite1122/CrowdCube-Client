import { useEffect, useState } from "react";

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1); // Keep track of the current slide
    const totalSlides = 3; // Total number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev % totalSlides) + 1); // Cycle through slides
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [totalSlides]);

    return (
        <div className="flex justify-center items-center mx-auto rounded-2xl">
            <div className="carousel w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px] relative">
                {/* Slide 1 */}
                <div
                    id="slide1"
                    className={`carousel-item relative w-full ${activeSlide === 1 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co.com/5Bp9MHg/Cleaning-Campaign-at-Teknaf-Health-Complex-scaled.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(6)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❯</button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    id="slide2"
                    className={`carousel-item relative w-full ${activeSlide === 2 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co.com/829mnpb/pict-original.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(3)}>❯</button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    id="slide3"
                    className={`carousel-item relative w-full ${activeSlide === 3 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co.com/DVcYHrB/Bangladesh-charity.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❯</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;
