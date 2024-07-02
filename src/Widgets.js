import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widgets = () => {
    const newsArticle = (heading, subtitle)=>{
        return (<div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>);
    };
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>NetCON News</h2>
        <InfoIcon />
      </div>
      {newsArticle("#KrishCodes4Life",'This is a Networking Platform Using React and Redux')}
      {newsArticle("Elon Musk",'He might go to moon on his cybertruck')}
      {newsArticle("KrishCodes",'Krishna Will add more features to this project')}
      {newsArticle("Leo Messi",'Leo just won his 8th Ballon dor')}
      {newsArticle("#KrishCodes4Life",'This is a Networking Platform Using React and Redux')}
      {newsArticle("Elon Musk",'He might go to moon on his cybertruck')}
      {newsArticle("KrishCodes",'Krishna Will add more features to this project')}
      {newsArticle("Leo Messi",'Leo just won his 8th Ballon dor')}
      
    </div>
  )
}

export default Widgets
