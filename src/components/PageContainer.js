import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import './../assets/css/App.css';
import { cityAction, fetchApiDataAction } from './../actions/cityAction'
// import WeatherComponent from './weatherComponent';


class PageContainer extends Component{  
  
  handleSubmit = (e) => {  
    e.preventDefault(); 
//  console.log('fff',this.props.cityId);
    this.props.fetchApiDataAction(this.props.cityId);
  }

  
    handleCityChange = (e)=>{
      e.preventDefault();
    if(e.target.value!==''){
      this.props.cityAction(e.target.value)
      
    }
    };
    componentDidMount(){
    //  this.props.fetchApiDataAction();
    console.log('dfdd',this.props)
    }
  
  render(){
    let apiDetails=null;
    if(this.props.isOk){
      console.log('rrrrrrr',this.props.apiData)
      let apiData = this.props.apiData;
      let errors = this.props.errors;
      // apiData.map(data=>{
        // const { apiData,isOk,data } = apiData;
        // console.log(apiData,'jjjj');       
        
        const { location,current_observation,forecasts } = apiData;
        // console.log(location,'fdf');
         apiDetails =  ( <div>
        {errors ? <p>{errors.message}</p> : null}
                   <h4> {location.city}, {location.region}, {location.country}</h4>  
                  ( <Moment unix tz={location.timezone_id}>
                   {current_observation.pubDate}
               </Moment> )         
                   <p><b>Wind:</b> chill:{current_observation.wind.chill}, direction:{current_observation.wind.direction}, speed:{current_observation.wind.speed}</p>
                   <p><b>Atmosphere:</b> humidity:{current_observation.atmosphere.humidity}, visibility:{current_observation.atmosphere.visibility}, pressure:{current_observation.atmosphere.pressure}</p>
                   <p><b>Astronomy:</b> sunrise:{current_observation.astronomy.sunrise}, sunset:{current_observation.astronomy.sunset}</p>
                   <p><b>condition:</b> {current_observation.condition.text}, temperature:{current_observation.condition.temperature}</p>
                   
                   {forecasts.map(data=>{
                     return (<li key={data.date}><Moment unix tz={location.timezone_id}>
                     {data.date}
                      </Moment>, Low:{data.low}, High:{data.high}, {data.text}</li>);
                   })}
                   
                 </div>
        )
      // })
    }else{
       apiDetails =  ('');
    }
        
    
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
            <button onClick={this.handleSubmit}>Get Weather</button>
            
          <hr />
          <h3>Weather Details</h3>
           {apiDetails}        
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

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  cityAction: (id) => dispatch(cityAction(id)),
  fetchApiDataAction: (id) => dispatch(fetchApiDataAction(id)),

})


/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({  
  cityId:state.cityReducer.id,
  apiData:state.cityReducer.weatherApiData.apiData,
  isOk:state.cityReducer.weatherApiData.isOk,
  errors:state.cityReducer.weatherApiData.errors,
})

        export default connect(mapStateToProps,mapDispatchToProps)(PageContainer);

