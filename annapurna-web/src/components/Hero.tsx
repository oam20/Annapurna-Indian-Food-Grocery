import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    // Original image from the HTML source
    const heroImage = "https://static.wixstatic.com/media/6cbac1_d6b62cc3e541430eb0c8f2b7b7f9128f~mv2.jpeg";

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 font-serif uppercase">
                        The Real Deal <br /> On Indian Food
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-cream/90 max-w-3xl mx-auto font-light">
                        Serves authentic vegetarian Indian food
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        to="/menu"
                        className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-transparent"
                    >
                        View Menu
                    </Link>
                    <Link
                        to="/order-online"
                        className="bg-brand-cream hover:bg-white text-brand-brown px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-brand-primary"
                    >
                        Order Online
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
