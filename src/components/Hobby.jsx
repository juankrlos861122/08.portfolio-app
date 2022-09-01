import React from 'react'

export function Hobby({ img, name, text }) {
  return (
    <div className="hobbies-single">
      <img 
        src={require(`../assets/images/${img}.jpeg`)} 
        alt={`Foto ${img}`}
      />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  )
}

