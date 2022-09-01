import React from 'react'

export const Experience = ({ img, date, charge, text }) => {
  return (
    <div className={`experience-detail`}>
      <img 
        src={require(`../assets/images/${img}.png`)} 
        alt={`Foto de ${img}`} 
      />
      <div className="detail-text">
        <p>{date}</p>
        <h3>{charge}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
