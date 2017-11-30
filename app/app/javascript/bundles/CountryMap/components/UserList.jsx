import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';

export default class UserList extends React.Component {
  static propTypes = {
    arrUserList: PropTypes.array
  };

  /**
  * @param props - Comes from your rails view.
  */

  constructor(props) {
    super(props);
    this.state = { 
      arrUserList: {
        "users": [
          
        ]
      } 
    }
  }
    

  updateCity = (name,userElem,tripId) => {
    
    let jsonUserList = {users: []};
    if(userElem.length){
      let index = 0;
      userElem.forEach((item) =>{
        jsonUserList.users.push({id: item.id,image:item.user_img,name: item.first_name,description: item.description,gender: item.gender,country: item.country,trip: tripId[index]});
        index+=1;
      })
    }
    
    this.setState({ arrUserList: jsonUserList } );
  };

componentDidMount = () =>{
  // $('#postsCarousel').carousel({
  //   interval: 1000
  // })

}
  render() {
    // TODO: Switch this to an AJAX-type call/or react state/prop to bring in real data.
    let jsonUserList = this.state.arrUserList;
    let tripId = [];
    let index = 0;
    //console.log("props",this.props.tripToReact,this.props.userToReact);
    
    return (
      <div>
        <label htmlFor="cityname">
            City:
          </label>
          <input
            id="cityname"
            type="text"
            value={this.state.name}
            onChange={(e) => {
              
              let userArr = [];
              this.props.tripToReact.forEach((elem) =>{
                var slicedstr = elem.destination.substring(0,elem.destination.length-5);
                if(slicedstr === e.target.value){
                  tripId.push(elem.id);
                  //console.log("trip id",tripId);
                  this.props.userToReact.forEach((userElem) =>{
                    if(userElem.id === elem.user_id){
                      userArr.push(userElem)
                    }
                  })
                }
              })
              
             console.log("user array",userArr);
              this.updateCity(e.target.value,userArr,tripId);
            }
          }
            disabled
          />
          <p />
        
          <div className="carousel slide" id="postsCarousel" data-ride="carousel" style={{"width" : "100%"}}> 
          
              {/* <div className="carousel-inner" > */}
              <div className ="row">
                {jsonUserList.users.map(function(user,key){
                  
                     return(
                      <div key={user.id} className={`item${key === 0 ? ' active' : ''}`}>
                      <div className="col-sm-6 col-md-4" >
                      <div className="thumbnail">
                      <img className="card-img-top-250" src={user.image} width={150} height={150} alt="Card image cap"/>
                        <h4 className="card-title">{user.name}</h4>
                        <p className="card-text">{user.description}</p>
                     
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user.gender}</li>
                        <li className="list-group-item">{user.country}</li>
                      </ul>
                      <p><a href={"/trip/chat/" + user.trip} key={user.id} target="_blank" className=" btn-primary" role="button">Chat</a></p>
                      </div>
                    
                      </div>   
                      </div>               
                     )
                     index +=1;
                  })
                }
              </div>
             
            </div>
          </div>
    );
  }


//  render() {
//   let jsonUserList = this.state.arrUserList;
//    return(
//      <div>
//        <Grid>
//        <Row>
//        {jsonUserList.users.map(function(user,key){
//          return(
//               <Col xs={6} md={4} key={key}>
//                 <Thumbnail src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="242x200">
//                   <h3>name: {user.name}</h3>
//                   <p>description: {user.description}</p>
//                   <p>
//                     <Button bsStyle="primary" href={}>Button</Button><br></br>
//                     <Button bsStyle="default">Button</Button>
//                     {/* <p><a href={"/trip/chat/" + user.id + '?name=' + user.name} key={user.id} target="_blank" className="btn btn-primary" role="button">Chat</a></p> */}
//                   </p>
//                 </Thumbnail>
//               </Col>
//             )
//           })}
//         </Row>
//         </Grid>
//      </div>
//    )
 
//  }
    
}



{/* <div className="col-md-4">
<div className="card" style={{width: 20 + 'rem'}}>
<img className="card-img-top" src="https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg" alt="Card image cap"/>
<div className="card-block">
<a href={"/trip/chat/" + user.id + '?name=' + user.name} key={user.id} target="_blank">
  <h4 className="card-title">{user.name}</h4>
  </a>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
<div className="card-block">

</div>
</div>
</div> */}





{/* 
  
   <section className="carousel slide" id="postsCarousel" data-ride="carousel" data-interval="500">  
              <div className="carousel-inner" role="listbox">
  
  
  <div className={`carousel-item${key === 0 ? ' active' : ''}`}>
                              <div className="card d-block">
                                <img className="card-img-top" src="https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg" alt="Card image cap"/>
                                <div className="card-block">
                                  <a href={"/trip/chat/" + user.id + '?name=' + user.name} key={user.id} target="_blank">
                                    <h4 className="card-title">{user.name}</h4>
                                  </a>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">Cras justo odio</li>
                                  <li className="list-group-item">Dapibus ac facilisis in</li>
                                  <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <div className="card-block"></div>
                              </div>
                          </div>       */}