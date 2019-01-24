import React from 'react'
import {Tag} from '../../../utils/Misc';

 const MatchesHome = () => {
  return (

    <div className="home_matches-wrapper">
    
    
    <div className ="container">

        <Tag
          bck="#0e1731"
          size="50px"
          color="#ffffff"
          
          >
          Matches
          </Tag>

        BLOCK

        <Tag
         bck="#ffffff"
         size="22px"
         color="0e1731" 
         link={true}
         linkTo="/Team"
          
        >

          See more matches
        </Tag>
      
    </div>

    </div>
  )
}

export default MatchesHome
