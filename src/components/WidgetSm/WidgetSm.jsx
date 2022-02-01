import { Visibility, Waves, WbCloudy, WbSunny } from '@material-ui/icons';
import React from 'react';
import "./WidgetSm.css"

export default function WidgetSm() {

    const Meteo_Data = [
        {
          "Jour": 'Lundi',
          "Température en °C": 25,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Mardi',
          "Température en °C": 26.2,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Mercredi',
          "Température en °C": 28,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Jeudi',
          "Température en °C": 28.3,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Vendredi',
          "Température en °C": 34,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Samedi',
          "Température en °C": 38,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
        {
          "Jour": 'Dimanche',
          "Température en °C": 43,
          "Description":"Nuageux",
          "lien_photo":"https://image-uviadeo.journaldunet.com/image/450/2013906044/1253620.jpg",
        },
      ];

  return (
  <div className='widgetSmall'>
      <span className="widgetSmTitle">Méteo</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">43 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Lundi</span>
                  <span className="widgetSmUserTitle">Nuageux</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
              <WbSunny className='widgetSmImg' color="primary"  />
              <span className="widgetSmTemp">37 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Mardi</span>
                  <span className="widgetSmUserTitle">Ensoleillé</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">35 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Mardi</span>
                  <span className="widgetSmUserTitle">Nuageux</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
            <Waves className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">27 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Mercredi</span>
                  <span className="widgetSmUserTitle">Pluvieux</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
              <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">29 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Jeudi</span>
                  <span className="widgetSmUserTitle">Nuageux</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
              <WbSunny className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">31 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Vendredi</span>
                  <span className="widgetSmUserTitle">Ensoleilé</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
              <WbSunny className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">32 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Samedi</span>
                  <span className="widgetSmUserTitle">Ensoleilé</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
          <li className="widgetSmListItem">
          <WbCloudy className='widgetSmImg' color="primary"/>
              <span className="widgetSmTemp">29 °C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Dimanche</span>
                  <span className="widgetSmUserTitle">Nuageux</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Voir plus
              </button>
          </li>
      </ul>
  </div>
  )
}
//