import React from 'react'
import { OutOfStockButton } from '../buttons/OutOfStockButton'
import { SupportButton } from '../buttons/SupportButton'

export const Card = ({
  id, title, pledge, description, left
}) => {
  return (
    <div className="backed__card"
    >
      <h3>{title}</h3>
      <span>Pledge ${pledge} or more</span>
      <p>{ description }</p>

      <div className="backed__stock">
        <h2>{left} <small>left</small></h2>
        {/* <button className="support--us">Select Reward</button> */}
        {
          (left <= 0)
            ? <OutOfStockButton />
            : <SupportButton />
        }
      </div>

    </div>
  )
}
