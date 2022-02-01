import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
  <div className='featured'>
      <div className="featuredItem">
          <span className="featureTitle">Capteur 1</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">32.8</span>
                <span className="featuredMoneyRate">°C <ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Comparé à hier</span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">Capteur 2</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">33,5</span>
                <span className="featuredMoneyRate">°C <ArrowUpward className='featuredIcon'/></span>
          </div>
          <span className="featuredSub">Comparé à hier </span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">Capteur 3</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">31,2</span>
                <span className="featuredMoneyRate">°C <ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Comparé à hier</span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">Capteur 4</span>
          <div className="featuredMoneyContainer">
                <span className="featuredMoney">34,1</span>
                <span className="featuredMoneyRate">°C <ArrowDownward className='featuredIcon'/></span>
          </div>
          <span className="featuredSub">Comparé à hier</span>
      </div>
  </div>
  )
}
