import React from 'react'

export const BackedModal = () => {
  return (
    <section className="white--bg">
      <div>
        <input type="radio"/>
        <h3>Pledge with no reward</h3>
      </div>
      <div>
        <p>
          Chose to support us without a reward if you simply believe in our project.
          As a backer, you will signed up to recieve products updates via emal.
        </p>
        <h3>103 <span>left</span></h3>
      </div>
      <div>
        <p>Enter your pladge</p>
        <div>
          <input type="text" placeholder="$ 25"/>
          <button className="support--us">Continue</button>
        </div>
      </div>
    </section>
  )
}
