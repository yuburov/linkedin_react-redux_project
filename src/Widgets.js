import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets(props) {
  const  newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>

      </div>
  )
  return (
      <div className='widgets'>
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("Smart Thinking: Overcoming Complexity", "Top news - 9324 readers")}
        {newsArticle("Critical Thinking for Better Judgment and Decision-Making", "Top news - 1034 readers")}
        {newsArticle("Bitcoin breaks $22k", "Crypto - 3000 readers")}
        {newsArticle("Coronavirus: Russia updates", "Top news - 500 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
        {newsArticle("Is React too good?", "Code -245 readers")}
      </div>
  );
}

export default Widgets;
