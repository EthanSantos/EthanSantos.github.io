import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const BlogArticle = ({ title, author, date, content }) => {
    const navigate = useNavigate();

    // Animation variants for staggered content
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="max-w-4xl mx-auto px-4 lg:px-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Back Button */}
            <motion.button
                onClick={() => navigate('/projects')}
                className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                ← Back to Projects
            </motion.button>

            {/* Title Section */}
            <motion.header
                className="mb-8"
                variants={itemVariants}
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
                variants={containerVariants}
            >
                {content.map((block, index) => {
                    switch (block.type) {
                        case 'text':
                            return (
                                <motion.p
                                    key={index}
                                    variants={itemVariants}
                                >
                                    {block.value}
                                </motion.p>
                            );
                        case 'subheader':
                            return (
                                <motion.h2
                                    key={index}
                                    className="text-2xl font-semibold text-gray-800 mt-6"
                                    variants={itemVariants}
                                >
                                    {block.value}
                                </motion.h2>
                            );
                        case 'image':
                            return (
                                <motion.figure
                                    key={index}
                                    className="flex flex-col items-center my-4"
                                    variants={itemVariants}
                                >
                                    <motion.img
                                        src={block.src}
                                        alt={block.alt || 'Blog image'}
                                        className="rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {block.caption && (
                                        <figcaption className="text-sm text-gray-500 mt-2">
                                            {block.caption}
                                        </figcaption>
                                    )}
                                </motion.figure>
                            );
                        case 'video':
                            return (
                                <motion.div
                                    key={index}
                                    className="my-4"
                                    variants={itemVariants}
                                >
                                    <motion.iframe
                                        src={block.src}
                                        title={block.alt || 'Blog video'}
                                        className="w-full aspect-video rounded-lg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    ></motion.iframe>
                                </motion.div>
                            );
                        case 'code':
                            return (
                                <motion.div
                                    key={index}
                                    className="my-4"
                                    variants={itemVariants}
                                >
                                    <SyntaxHighlighter
                                        language={block.language || 'javascript'}
                                        style={block.style}
                                    >
                                        {block.value}
                                    </SyntaxHighlighter>
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