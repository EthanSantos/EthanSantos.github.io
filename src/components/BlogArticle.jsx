import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// Container animation variants for mount and exit
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
};

// Item animation variants for individual content blocks
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
};

/**
 * ParallaxImage Component  
 * Uses useScroll and useTransform to create a subtle parallax effect on images.
 */
const ParallaxImage = ({ src, alt, caption }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.figure
      ref={ref}
      className="flex flex-col items-center my-4 overflow-hidden" // Prevents overflow during hover
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={itemVariants}
    >
      <motion.img
        src={src}
        alt={alt || 'Blog image'}
        className="rounded-lg"
        style={{ y }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

const BlogArticle = ({ title, author, date, content }) => {
  const navigate = useNavigate();

  // Render each content block with minimal scroll-triggered animations.
  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return (
          <motion.p
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            {block.value}
          </motion.h2>
        );
      case 'image':
        return (
          <ParallaxImage
            key={index}
            src={block.src}
            alt={block.alt}
            caption={block.caption}
          />
        );
      case 'video':
        return (
          <motion.div
            key={index}
            className="my-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>
        );
      case 'code':
        return (
          <motion.div
            key={index}
            className="my-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <SyntaxHighlighter language={block.language || 'javascript'} style={block.style}>
              {block.value}
            </SyntaxHighlighter>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 lg:px-0 mt-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Back Button with a minimal hover effect */}
      <motion.button
        onClick={() => navigate('/projects')}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg transition-all"
        variants={itemVariants}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      {/* Title & Metadata */}
      <motion.header className="mb-8" variants={itemVariants}>
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <p>By {author}</p>
          <p>{date}</p>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article className="prose lg:prose-lg xl:prose-xl prose-img:rounded-lg prose-video:rounded-lg text-gray-700">
        {content.map(renderContentBlock)}
      </motion.article>
    </motion.div>
  );
};

export default BlogArticle;
