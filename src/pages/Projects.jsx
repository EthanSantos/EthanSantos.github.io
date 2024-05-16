import React from 'react'
import Card from '../components/Card'
import nagaguard from '../assets/nagaguard.png'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <Card imageSrc={"https://c4.rbxcdn.com/7d886a6de2bf7247bd64dee0df2d0756"} title={"AIMSTARS"} skills={[{ text: "Lua" }, { text: "Roblox Studio" }, { text: "Git" }]} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Ut lectus arcu bibendum at varius vel pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam at lectus urna duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien. At risus viverra adipiscing at in tellus integer feugiat. Vivamus at augue eget arcu dictum varius duis at consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit."} />
      <Card imageSrc={nagaguard} title={"NagaGuard"} skills={[{ text: "React" }, { text: "Flask" }, { text: "MySQL" }, { text: "Bootstrap" }, { text: "JavaScript" }, { text: "Python" }]} description={`My team won <strong>Best Startup</strong> at BearHack at <strong>University of California, Riverside</strong>. <strong>Problem:</strong> Local clinics and hospitals spend almost 50% of management funds on manually coding patient data. This process takes several hours daily. Since all clinics and hospitals use the same coding system, we found that Google's <strong>Gemini AI</strong> was familiar with this system and could encode medical reports with 90% accuracy. We built NagaGuard, an AI web app that uses Gemini to input pages of medical reports and encode them in SECONDS! Patients could then review their appointment records instantly.`} />
      <Card imageSrc={"https://c7.rbxcdn.com/3efa2f7703d668fac6e0b614552912d0"} title={"Guess the Build"} skills={[{ text: "Lua" }, { text: "Roblox Studio" }, { text: "Git" }]} description={"Test description"} />
    </div>
  )
}

export default Projects
