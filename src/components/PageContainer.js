import React, { Component } from 'react';
import OAuth from 'oauth';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import './../assets/css/App.css';
import { cityAction } from './../actions/cityAction'
// import WeatherComponent from './weatherComponent';

const api_header = {
  "X-Yahoo-App-Id": "0FCEXQ4a0FCEXQ4a"
};
const api_request = new OAuth.OAuth(
  null,
  null,
  'dj0yJmk9TlJBSWt3WU9seUlqJmQ9WVdrOU1FWkRSVmhSTkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTY0',
  '03565e99b7c8ceb2cb1af041e18f61b3653dfc6a',
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  api_header
);
/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  cityAction: () => dispatch(cityAction())
})


/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class PageContainer extends Component{
  state={
    messageopen:false,
    messageInfo: {},
    apiData: {},
    isOk:true,
    errors:null,
    city:'',
  }

  
  fetchApiData=()=> {
    
    api_request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${this.state.city}&format=json`,
      null,
      null,
       (err, data, result)=> {
          if (!err) {
                // console.log(data,'pppppp');
               
              this.setState({apiData:JSON.parse(data),isOk:false});
              
          }else{
            // console.log(err);
            this.setState({errors:err});
            
          } 
      }
    );
  };
  cityAction = (event) => {
    this.props.cityAction();
  }

  giveSuccessMessage=(message)=>{
    let newmsg = {
      message,
      key:new Date().getTime()
    };
    
    this.setState({
    messageopen:true,
    messageInfo:newmsg
    
    });
    
    // console.log('gghh',this.state.city);
    };
  onSubmit = ()=>{
    if(this.state.city.length > 0){
      this.fetchApiData();
      this.giveSuccessMessage('send successfully ');  
    }
  
  };
   handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ messageopen: false });
    };
  
    handleCityChange = (event)=>{
    if(this.state.city!=event.target.value){
      this.setState({ city: event.target.value });
    }
    };
  
  render(){
    const { apiData,isOk,errors } = this.state;
    const { location,current_observation,forecasts } = apiData;
    // console.log(apiData,'fdf');
    return(
    <div className="container-fluid text-center">    
      <div className="row content">
        <div className="col-sm-2 sidenav">
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
        </div>
        <div className="col-sm-8 text-left"> 
          <h1>Weather Forcasting</h1>
          {/* <pre>
              {
                JSON.stringify(this.props)
              }
            </pre> */}
            
            <div className="form-group">
              <label htmlFor="sel1">Select City:</label>
              <select className="form-control" id="sel1" onChange={this.handleCityChange}>
              <option value="">--Select--</option>
              <option value="New York">New York</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Rochester">Rochester</option>
              <option value="Yonkers">Yonkers</option>
              <option value="Syracuse">Syracuse</option>
              <option value="Los Angeles">Los Angeles</option>
               <option value="Chicago">Chicago</option>
              </select>
            </div> 
            {/* <button onClick={this.cityAction}>Test redux action</button> */}
            <button onClick={this.onSubmit}>Get Weather</button>
            
          <hr />
          <h3>Weather Details</h3>
         
          {errors ? <p>{errors.message}</p> : null}
 {
   !isOk  ? //console.log('gfgfgg',apiData)
(
  <div>
  
             <h4> {location.city}, {location.region}, {location.country}</h4>  
            ( <Moment unix tz={location.timezone_id}>
             {current_observation.pubDate}
         </Moment> )         
             <p><b>Wind:</b> chill:{current_observation.wind.chill}, direction:{current_observation.wind.direction}, speed:{current_observation.wind.speed}</p>
             <p><b>Atmosphere:</b> humidity:{current_observation.atmosphere.humidity}, visibility:{current_observation.atmosphere.visibility}, pressure:{current_observation.atmosphere.pressure}</p>
             <p><b>Astronomy:</b> sunrise:{current_observation.astronomy.sunrise}, sunset:{current_observation.astronomy.sunset}</p>
             <p><b>condition:</b> {current_observation.condition.text}, temperature:{current_observation.condition.temperature}</p>
             
             
             
           </div> 
         
        )
        :
        ('')
      }
        </div>
        <div className="col-sm-2 sidenav">
          <div className="well">
            <p>ADS</p>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
        </div>
      </div>
    </div>

    );
  }

}

        export default connect(mapStateToProps,mapDispatchToProps)(PageContainer);

