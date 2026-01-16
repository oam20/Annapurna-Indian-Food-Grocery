import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Address */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-orange-500">Annapurna</h3>
                        <div className="flex items-start gap-3 text-gray-400">
                            <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-orange-500" />
                            <p>7464 Ridge Rd,<br />Parma, OH 44129</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Phone className="h-5 w-5 text-orange-500" />
                            <p>440-253-8311</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Mail className="h-5 w-5 text-orange-500" />
                            <p>info@annapurnaindianfood.com</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Opening Hours</h3>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 mt-1 text-orange-500" />
                                <div>
                                    <p>Sun, Tue - Fri: 11:30am - 9pm</p>
                                    <p>Saturday: 11am - 9pm</p>
                                    <p className="text-orange-500 font-medium">Monday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Stay Updated</h3>
                        <p className="text-gray-400">Subscribe for latest updates and offers.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                            />
                            <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Social / Map Placeholder */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} by annapurnaindianfood.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
