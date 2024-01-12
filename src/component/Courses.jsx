import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container,Row,Col} from 'react-bootstrap';
function Courses() {
  
    const data=[{
                 icon:"fa-solid fa-house",
                 title:"full courses",
                 subtitle:"24 Hourse Support"
                },
                {
                    icon:"fa-solid fa-house",
                    title:"full courses",
                    subtitle:"24 Hourse Support"
                },
                {
                    icon:"fa-solid fa-house",
                    title:"full courses",
                    subtitle:"24 Hourse Support"
                }];

                
             const Column =({data}) =>{  return ( 
                    <>
                    <Col className='text-center p-5 shadow border ms-2' >
                        <div className='icon-box'>
                            <FontAwesomeIcon icon={data.icon}></FontAwesomeIcon>
                            <h2>{data.title}</h2>
                            <p>{data.subtitle}</p>
                        </div>
                    </Col>
                    </>

             )}


             return (
                <Container>
                    <Row>
                        {
                            data.map((data,index)=>{
                                return <Column data= {data} key={index}/>
                            })
                        }
                    </Row>
                </Container>
             )

}

export default Courses