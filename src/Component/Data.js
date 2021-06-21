import React from 'react';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Data(){


    const[posts, setSearch] = useState([]);
    const [search, setSearchInput] = useState('');
    
    const URL = `https://jsonplaceholder.typicode.com/posts`

        useEffect ( () => {
         fetch(URL)
         .then( (res) => res.json())
         .then( (res) => {
           setSearch(res);
          //  console.log(res);
         })
         
  },[]);

const handleInput = ((e) => {
  setSearchInput(e.target.value)
})


    return(
        
      
       <div className="container"> 

<Container>
  <Row className="justify-content-md-center">
    
    <Col  xs lg="2"> 
          <div className="container"> 
          <ListGroup.Item style= {{width:'110%', paddingBottom:'420px',marginTop:'40px',textAlign:'center'}}>
          User 
         
   
          {posts.map((val,key) =>{ 
            if(key < 4){
            return(
            <ul className="container" style = {{marginTop:'20px'}} >user Id: {val.id} </ul>
            
          )
            }
               })}

                  
          </ListGroup.Item>
          </div>
          </Col>

          <Col> 
       <ListGroup.Item  style = {{marginTop:'40px',marginLeft:'60px'}}>

<input placeholder = 'Search by title...' type ='text'
   onChange = {handleInput}

 style={{marginLeft:'2px',marginTop:'10px'}} />
 {posts.length > 0 ? ( 

<div style={{marginLeft:'88%',marginbottom:'15px'}} >{posts.length} posts</div>
): (' ')}

     


{posts.filter((val)=> {
  if(search=='') {
    return val
  }else if (val.title.toLowerCase().includes(search.toLowerCase())){
    return val
  }
}).map((val,key) => {
     if (key < 4) {
       return(
        <ListGroup.Item  style = { {width:'100%',marginTop:'30px', marginBottom:'40px'}}>

<h6>{val.title}</h6>
 {val.body}    
 </ListGroup.Item>
       )} 
       })
       }

       </ListGroup.Item>
   </Col>
  </Row>
                  
          </Container>
        </div>
    );
}
      
   
   
  
