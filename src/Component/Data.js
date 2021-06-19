import React from 'react';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Data(){


    const[posts, setSearch] = useState([]);
    
    const URL = 'https://jsonplaceholder.typicode.com/posts'

        useEffect ( () => {
         fetch(URL)
         .then( (res) => res.json())
         .then( (res) => {
           setSearch(res);
           console.log(res);
         })
        
  },[]);

 
    return(
        
      
       <div className="container"> 

<Container>
  <Row className="justify-content-md-center">
    
    <Col xs lg="2"> 
          <div className="container"> 
          <ListGroup.Item style= {{width:'110%',marginTop:'40px',textAlign:'center'}}>
          User
          {posts.map(val => (
            <ul className="container" style = {{marginTop:'20px'}} >user Id: {val.id} </ul>
            
          ))}
                  
          </ListGroup.Item>
          </div>
          </Col>

          <Col> 
       <ListGroup.Item  style = {{marginTop:'40px',marginLeft:'60px'}}>

<input placeholder = 'Search by title...' 
 style={{marginLeft:'2px',marginTop:'10px'}} />
 {posts.length > 0 ? ( 

<div style={{marginLeft:'88%',marginbottom:'15px'}} > {posts.length} posts</div>
): (' ')}

     
   {posts.map(val => (
   <ListGroup.Item style = { {width:'100%',marginTop:'30px'}}>{val.body} {val.title}  </ListGroup.Item>
    
   ))}
   
   </ListGroup.Item>
   </Col>
  </Row>
                  
          </Container>
        </div>
    );
}