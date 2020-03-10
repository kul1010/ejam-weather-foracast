import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const WeatherComponent = (props) => {
const {weatherProps}= props
const {current_observation,location}= weatherProps
  // console.log(current_observation,'kkkk',location)
  (
  <div>
  
                <div>
     
                <h3> {location.city}, {location.region}, {location.country}</h3>  
                <Moment unix tz={location.timezone_id}>
                {current_observation.pubDate}
            </Moment>                    
                <p><b>Wind:</b> chill:{current_observation.wind.chill}, direction:{current_observation.wind.direction}, speed:{current_observation.wind.speed}</p>
                <p><b>Atmosphere:</b> humidity:{current_observation.atmosphere.humidity}, visibility:{current_observation.atmosphere.visibility}, pressure:{current_observation.atmosphere.pressure}</p>
                <p><b>Astronomy:</b> sunrise:{current_observation.astronomy.sunrise}, sunset:{current_observation.astronomy.sunset}</p>
                <p><b>condition:</b> {current_observation.condition.text}, temperature:{current_observation.condition.temperature}</p>
                
                
                
              </div>
    
  </div>
)};

export default WeatherComponent;
