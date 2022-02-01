import React from 'react';
import "./Widgetlg.css"

export default function Widgetlg() {

const Button=({type})=>{
  return <button className={"widgetLgButton"+type }>{type}</button>
}

  return (
  <div className='widgetLg'>
    <h3 className="widgetLgTitle">Dernières connexions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Utilisateurs</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh"></th>
        <th className="widgetLgTh">Statut</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHnEO8Gh4EOTg/profile-displayphoto-shrink_200_200/0/1637613319218?e=1645056000&v=beta&t=YuyCH7cBPrGIHnVUP6xOSRRGXLUsxvYsuaTeA1Zq8T0" alt="" className='widgetLgImg'/>
          <span className="widgetLgName">Malo BOYARD</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHnEO8Gh4EOTg/profile-displayphoto-shrink_200_200/0/1637613319218?e=1645056000&v=beta&t=YuyCH7cBPrGIHnVUP6xOSRRGXLUsxvYsuaTeA1Zq8T0" alt="" className='widgetLgImg'/>
          <span className="widgetLgName">Malo BOYARD</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHnEO8Gh4EOTg/profile-displayphoto-shrink_200_200/0/1637613319218?e=1645056000&v=beta&t=YuyCH7cBPrGIHnVUP6xOSRRGXLUsxvYsuaTeA1Zq8T0" alt="" className='widgetLgImg'/>
          <span className="widgetLgName">Malo BOYARD</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHnEO8Gh4EOTg/profile-displayphoto-shrink_200_200/0/1637613319218?e=1645056000&v=beta&t=YuyCH7cBPrGIHnVUP6xOSRRGXLUsxvYsuaTeA1Zq8T0" alt="" className='widgetLgImg'/>
          <span className="widgetLgName">Malo BOYARD</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus"><Button type="Approved"/></td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHnEO8Gh4EOTg/profile-displayphoto-shrink_200_200/0/1637613319218?e=1645056000&v=beta&t=YuyCH7cBPrGIHnVUP6xOSRRGXLUsxvYsuaTeA1Zq8T0" alt="" className='widgetLgImg'/>
          <span className="widgetLgName">Malo BOYARD</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus"><Button type="Approved"/></td>
      </tr>
    </table>
  </div>
  )
}
