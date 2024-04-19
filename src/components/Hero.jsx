import React from 'react'
import bg from '../assets/images/bg-5.jpg';

const Hero = () => {
    return (
        <>
            {/* <!-- Hero --> */}
            <section className="py-20 mb-4" style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center "
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-bold sm:text-5xl md:text-6xl text-white"
                        >
                            Become a React Dev
                        </h1>
                        <p className="my-4 text-3xl bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                            Find the React job that fits your skills and needs
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero