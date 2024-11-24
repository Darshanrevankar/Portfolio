import React from 'react'
import img1 from '../../assets/img1.png'
import '../About/About.css'

function About() {
  return (
    <div className="about_card">
      <div className="about_container">
        <div class="headline">
          <h1>PROJECT</h1>
        </div>
        <div className="main">
          <img src={img1} alt="" />
          <div className="about_info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit, dolore velit maxime asperiores
              quia neque?
              Consequuntur magni quasi laboriosam accusamus quisquam officiis sint, architecto impedit harum saepe
              amet nobis fugit
              dolores quae iste iure alias ipsam explicabo itaque maiores voluptate eveniet commodi. Eum dolores
              facere accusamus error
              placeat accusantium quibusdam modi recusandae fugiat, expedita autem porro veniam molestias cum
              omnis cupiditate quas iure
              ipsum aut, atque aliquam. Dolores deserunt illo rem impedit fuga! Officia soluta magni aliquam modi
              rerum laudantium id fuga,
              itaque doloremque possimus voluptates, incidunt aperiam autem ab amet! Magnam aspernatur id sequi
              possimus pariatur fugiat
              aliquid in temporibus architecto ratione. Nulla a saepe sapiente praesentium quis, assumenda ex cum
              asperiores neque earum
              incidunt ea ipsum! Adipisci delectus debitis in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About