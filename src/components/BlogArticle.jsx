import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogArticle = ({ title, author, date, content }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="max-w-4xl mx-auto px-4 lg:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Back Button */}
            <motion.button
                onClick={() => navigate('/projects')}
                className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg transition-all"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                ← Back to Projects
            </motion.button>

            {/* Title Section */}
            <motion.header
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <p>By {author}</p>
                    <p>{date}</p>
                </div>
            </motion.header>

            {/* Content Section */}
            <motion.article
                className="prose lg:prose-lg xl:prose-xl prose-img:rounded-lg prose-video:rounded-lg text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {content.map((block, index) => {
                    switch (block.type) {
                        case 'text':
                            return <p key={index}>{block.value}</p>;
                        case 'subheader':
                            return (
                                <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-6">
                                    {block.value}
                                </h2>
                            );
                        case 'image':
                            return (
                                <motion.div
                                    key={index}
                                    className="flex justify-center my-4"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <img
                                        src={block.src}
                                        alt={block.alt || 'Blog image'}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                            );
                        case 'video':
                            return (
                                <motion.div
                                    key={index}
                                    className="my-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <iframe
                                        src={block.src}
                                        title={block.alt || 'Blog video'}
                                        className="w-full aspect-video rounded-lg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </motion.div>
                            );
                        default:
                            return null;
                    }
                })}
            </motion.article>
        </motion.div>
    );
};

export default BlogArticle;