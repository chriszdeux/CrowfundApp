import React from 'react'

export const ProgessBar = ({daysLeft}) => {
  return (
    <div className="progress__bar ">
      <div className="progress--done" style={{width: `${daysLeft}%`}}>
      </div>
    </div>
  )
}
