import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <Card imageSrc={"https://c4.rbxcdn.com/7d886a6de2bf7247bd64dee0df2d0756"} title={"AIMSTARS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Ut lectus arcu bibendum at varius vel pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam at lectus urna duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien. At risus viverra adipiscing at in tellus integer feugiat. Vivamus at augue eget arcu dictum varius duis at consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit."} />
      <Card imageSrc={"https://c4.rbxcdn.com/7d886a6de2bf7247bd64dee0df2d0756"} title={"Title"} description={"Test description"} />
      <Card imageSrc={"https://c4.rbxcdn.com/7d886a6de2bf7247bd64dee0df2d0756"} title={"Title"} description={"Test description"} />
    </div>
  )
}

export default Projects
