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
                value: "AIMSTARS holds a really special place in my journey as a developer—it’s the first project that truly took off with an active user base and even started generating revenue. I've had my fair share of experimental projects before, from fast-paced first-person shooters to multiplayer party games, but AIMSTARS was my first turning point as a developer."
            },
            {
                type: 'subheader',
                value: "What is AIMSTARS?"
            },
            {
                type: 'text',
                value: "AIMSTARS is a 3D first-person shooter aim trainer game where players can practice their shooting skills in a variety of scenarios. The game challenges you to hit targets with precision, and your performance gets recorded on a global leaderboard. It’s all about refining your aim in a competitive environment—something I really wanted to offer for gamers who take their FPS skills seriously (something I did at the time lol)."
            },
            {
                type: 'subheader',
                value: "How I Came Up With The Idea"
            },
            {
                type: 'text',
                value: "As someone who has played a lot of FPS games growing up, I understood the importance of aiming in shooter games. I always struggled with improving or working on my aiming mechanics. The old-fashion way to get better was to simply just play the game more. However, I realized that there could be a better way to improve I thought, why not create a dedicated platform to specifically train and hone those aiming skills? I was inspired by games like Kovaaks Aim Trainer and Aim Labs, which pushed the boundaries of what an aim trainer could be. I started brainstorming ways to simulate real-game scenarios, and soon enough, the concept of AIMSTARS—covering everything from tracking and flicking to quick target switching and click-timing—was born."
            },
            {
                type: 'subheader',
                value: "Overview of How I Made It"
            },
            {
                type: 'text',
                value: "Building AIMSTARS was a learning curve in every sense. I immersed myself in both the creative and technical aspects of game development, iterating on gameplay mechanics and ensuring a smooth user experience. I spent countless hours prototyping, testing, and refining each feature. The journey wasn’t always smooth, but every challenge reinforced my skills as a developer and taught me something new about game design and user engagement."
            },
            {
                type: 'code',
                language: 'lua',
                value: `-- This is a sample piece of code that displays how I handled all my data in AIMSTARS:
local function saveData(Player)
    local Data = {}
    for _, stat in pairs(Player.Stats:GetChildren()) do
        Data[stat.Name] = stat.Value
    end
    local s, e = pcall(function()
        DataStore:SetAsync('UserId: ' .. Player.UserId, Data)
    end)
    if s then
        print(Player.Name.."'s data has been successfully saved!")
    else
        warn("Something went wrong while saving " .. Player.Name .. "'s data")
    end
end`
            },
            {
                type: 'subheader',
                value: "Marketing - How Did This Game Get So Popular?"
            },
            {
                type: 'text',
                value: "I didn't run any ads—the growth of AIMSTARS was completely organic. The game spread by word of mouth within the FPS community, and soon enough, big YouTubers like Bandites started playing and making videos about it. It was amazing to see the power of community recommendations and genuine excitement drive the game to new heights."
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
                type: 'image',
                src: Droplet,
                alt: "Droplet Image"
            },
            {
                type: 'text',
                value: "Community was everything to me during this project. I made sure to listen to player feedback, engage on social media, and even talked personally to players on the discord server. The genuine connection I was able to build with the players not only improved the game but also reaffirmed why I love building software that makes a difference. It’s incredible to see how a simple idea can evolve into such a large community and player base."
            },
            {
                type: 'subheader',
                value: "Looking Ahead"
            },
            {
                type: 'text',
                value: "Reflecting on AIMSTARS, I feel an immense sense of gratitude. Developing this game at an early stage of my career has not only solidified my technical foundation but also taught me the art of creating products that resonate with users. I’m excited about the future—both for AIMSTARS and for my journey as a developer. There’s so much more to learn and build, and I can’t wait to see where the next project takes me. (Fun fact - I edited the trailer for the game below)."
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
