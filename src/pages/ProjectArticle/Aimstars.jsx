import React from 'react';
import BlogArticle from '../../components/BlogArticle';
import Droplet from "../../assets/Droplet.png"
import AimstarsGraph from "../../assets/AimstarsGraph.png"

const Aimstars = () => {
    const blogData = {
        title: "AIMSTARS: How I Developed a Successful Roblox Game",
        author: "Ethan Santos",
        date: "November 26, 2024",
        content: [
            {
                type: 'text',
                value: "AIMSTARS has always had a special place in my heart. It is the first project of mine to be succesful - as in have users and generate revenue. I've had plenty of failed projects before, from first person shooter games to  multiplayer party games. "
            },
            {
                type: 'subheader',
                value: "What is AIMSTARS?"
            },
            {
                type: 'text',
                value: "AIMSTARS is a 3D first-person shooter aim trainer game designed to allow players to practice their aim through different scenarios. Players are scored based on how well they can hit the targets and this score is uploaded to a leaderboard where they can compete with other players."
            },
            {
                type: 'subheader',
                value: "How I Came Up With The Idea"
            },
            {
                type: 'text',
                value: 'As someone who has played a lot of FPS games growing up, I understood the importance of aiming in shooter games. I always struggled with improving or working on my aiming mechanics. The old-fashion way to get better was to simply just play the game more. However, I realized that there could be a better way to improve. My idea was to create a video game that allowed you to practice shooting against different bots that were similar to real in-game situations. I had created hundreds of different modes that covered all the types of aiming mechanics that you needed - tracking, flicking, target switching, and click-timing.'
            },
            {
                type: 'subheader',
                value: "Overview of How I Made It"
            },
            {
                type: 'text',
                value: "This is where I talk about how I made the game"
            },
            {
                type: 'image',
                src: Droplet,
                alt: "Droplet Image"
            },
            {
                type: 'subheader',
                value: "Marketing - How Did This Game Get So Popular?"
            },
            {
                type: 'text',
                value: "I sent ads"
            },
            {
                type: 'image',
                src: AimstarsGraph,
                alt: "Aimstars Daily Active Users Image"
            },
            {
                type: 'video',
                src: "https://www.youtube.com/embed/XRd0V2eS0WA?start=19",
                alt: "YouTuber Reviews AIMSTARS"
            },
            {
                type: 'subheader',
                value: "Building a Thriving Community"
            },
            {
                type: 'text',
                value: "Community was everything to me. Having so many people actually use my game and improve because of it really made me fall in love with developing (both games and software)."
            },
            {
                type: 'subheader',
                value: "Looking Ahead"
            },
            {
                type: 'text',
                value: "I am incredibily grateful to have had created such a successful project at an early age. It has really solified my foundational knowledge for programming concepts all the way to just how to create something that users will care about."
            },
            {
                type: 'video',
                src: "https://www.youtube.com/embed/W1Ry2lBVVzo",
                alt: "AIMSTARS Official Trailer"
            }
        ]
    };

    return (
        <div>
            <BlogArticle
                title={blogData.title}
                author={blogData.author}
                date={blogData.date}
                content={blogData.content}
            />
        </div>
    );
};

export default Aimstars;