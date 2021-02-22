import React from 'react'

export const BackedCard = () => {
  return (
    <div className="backed__card">
      <h3>Bamboo Stand</h3>
      <span>Pledge $25 or more</span>
      <p>
        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list
      </p>

      <div className="backed__stock">
        <h2>101 <small>left</small></h2>
        <button className="support--us">Select Reward</button>
      </div>

    </div>
  )
}
