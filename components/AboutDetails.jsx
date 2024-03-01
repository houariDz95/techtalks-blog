"use client"
import { motion } from 'framer-motion';

const AboutDetails = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full mt-16 sm:mt-24  px-5 sm:px-10 md:px-24 sxl:px-32 ">
            <motion.header
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-accentSoft dark:bg-accentDark text-white dark:text-accent text-center py-8">
                <h1 className="text-4xl font-bold">TechHubTalks</h1>
                <p className="mt-2">Your Gateway to Tomorrow&apos;s Technology</p>
            </motion.header>

            <motion.section
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto mt-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Explore the Future</h2>
                    <p className="text-gray-700">
                        Immerse yourself in the cutting-edge world of technology with our curated content that showcases the latest
                        innovations, trends, and breakthroughs. From artificial intelligence and blockchain to virtual reality
                        and beyond, we bring you a front-row seat to the future.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">In-Depth Insights</h2>
                    <p className="text-gray-700">
                        Dive deep into insightful articles, expert analyses, and thought-provoking discussions that demystify
                        complex tech concepts. Stay informed and gain a deeper understanding of how technology is shaping our
                        world.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Tech Tutorials & Guides</h2>
                    <p className="text-gray-700">
                        Empower yourself with practical knowledge through our step-by-step tutorials and guides. Whether you&apos;re a
                        seasoned tech enthusiast or a beginner, we&apos;ve got something for everyone to enhance their tech skills.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Community Hub</h2>
                    <p className="text-gray-700">
                        Join our vibrant community of tech enthusiasts, developers, and industry experts. Engage in discussions,
                        share your ideas, and connect with like-minded individuals passionate about the limitless possibilities
                        of technology.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Geek Out</h2>
                    <p className="text-gray-700">
                        Indulge your inner geek with reviews, hands-on experiences, and insider perspectives on the latest
                        gadgets, software, and tech gear. Find recommendations and stay ahead in the ever-evolving world of
                        tech.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-gray-700">
                        Don&apos;t miss a beat! Subscribe to our newsletter for regular updates, exclusive content, and early access
                        to the tech trends that are shaping tomorrow.
                    </p>
                </div>
            </motion.section>

            <motion.section
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-200 py-8">
                <div className="container mx-auto text-center">
                    <p className="text-gray-700">At TechHubTalks, we believe that technology should be accessible, exciting, and
                        transformative. Join us on this journey as we navigate the digital frontier together. Welcome to the
                        future – welcome to TechHubTalks
                    </p>
                </div>
            </motion.section>
        </motion.div>
    );
}

export default AboutDetails;
