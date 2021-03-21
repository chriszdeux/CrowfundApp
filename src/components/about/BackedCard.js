import React, { useState } from 'react'
import { OutOfStockButton } from '../buttons/OutOfStockButton'
import { SupportButton } from '../buttons/SupportButton'

export const BackedCard = ({
  id, title, pledge, description, left
}) => {
  // debugger

  return (

    <div className={ left === 0 
      ? `backed__card opacity--card`
      : `backed__card `
    }
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





    // <>
    //   {
    //     (left <= 0)
    //       ? <div className="backed__card" style={{opacity:0.3}}>
    //       <h3>{title}</h3>
    //       <span>Pledge ${pledge} or more</span>
    //       <p>{ description }</p>
    
    //       <div className="backed__stock">
    //         <h2>{left} <small>left</small></h2>
    //         {/* <button className="support--us">Select Reward</button> */}
    //         <button className="out--stock">Select Reward</button>
    //       </div>
    
    //       </div>
    //       : <div className="backed__card">
    //       <h3>{title}</h3>
    //       <span>Pledge ${pledge} or more</span>
    //       <p>{ description }</p>
    
    //       <div className="backed__stock">
    //         <h2>{left} <small>left</small></h2>
    //         {/* <button className="support--us">Select Reward</button> */}
    //         <button className="support--us">Select Reward</button>
    //       </div>
    
    //     </div> 
    //   }
    // </>
  )
}
