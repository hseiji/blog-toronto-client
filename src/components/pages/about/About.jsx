import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className="about">
      <img
        src="https://upload.travelawaits.com/ta/uploads/2021/04/be9ded01f8f1aadfe83f9dbda76fcbe9ded-800x800.jpg"
        alt=""
        width="300px"
      />
      <div className="container-right">
        <h4>Hi there!</h4>
        <p>
          This blog contains the most famous places of the city of Toronto as
          well as the hidden gems that you must check it out.
        </p>
        <p>
          Please feel free to register and contribute with your favorites places
          and stories.
        </p>
      </div>
    </div>
  )
}
