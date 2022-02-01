import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import {User_Data} from "../../data/Data_moy";
import {Meteo_Data} from "../../data/Data_meteo";
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import Widgetlg from '../../components/Widgetlg/Widgetlg';

import "./home.css";

export default function home() {
  return (
  <div className='home'>
      <FeaturedInfo/>
      <Chart data={User_Data} title="Température dans la salle :" grid temp="Température en °C" dataKey="mois"/>
      <div className="homeWidget">
      <WidgetSm/>
      <Widgetlg/>
      </div>
  </div>
  )
}
