import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Col, Row, NavbarBrand, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect'
import icon from '../image/icon.png'
import ReactPlayer from 'react-player'
import video from '../video/jazire.mp4'
import img from '../image/hooshyar.jpg'
import imga from '../image/logo1.png'
import imgyaser from '../image/yaserahmadi.jpg'
import yavazi from '../image/yavazi.jpg'
import hasan from '../image/hasan.jpg'
function Navb() {
  return (
    <>
      {/* <NAVBAR></NAVBAR> */}
      <Navbar bg="dark" variant='dark' expand="md" className='navb'>
        <Container fluid>
          <Navbar.Brand><img width={50} height={50} src={icon} /></Navbar.Brand>
          <Navbar.Brand href="#home" className='logoname'>آموزشگاه رانندگی جزیره</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#madarek" className='titlesite'>مدارک</Nav.Link>
              <Nav.Link href="#morabi" className='titlesite'>مربیان</Nav.Link>
              <Nav.Link href='#call' className='titlesite'>ارتباط با ما</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* safhe Asli */}

      <Container fluid className='cont'>

        {/* header Site */}

        <Container >
          <Row>
            <Col >

              <img className='imgpass' />

              <div className='text'>
                <Typewriter
                  onInit={(typewriter) => {

                    typewriter
                      .pauseFor(1000)
                      .typeString('<span style="color: #27ae60;"> آموزشگاه رانندگی جزیره</span> اولین ومجهزترین آموزشگاه در جزیره قشم')
                      .pauseFor(2000)
                      .deleteChars(37)
                      .typeString('و بهترین مربیان آموزشگاه')
                      .pauseFor(2000)
                      .deleteChars(24)
                      .typeString(' در جزیره زیبای قشم ')
                      .start()
                  }}
                />

                <div className='video'>

                
                <ReactPlayer style={{padding:'7px', borderRadius:'8px',border:'solid 1px rgb(243, 245, 242)',boxShadow:'#ffffff 2px 2px 8px'}} width={'100%'} height={150} url={video} controls/>

                </div>

                

              </div>

              

            </Col>


          </Row>
        </Container>
      </Container>



      {/* safheAsli */}

      <Container fluid >


                  {/* madarek */}

        <Container fluid className='contsafhe'>

          <Row>
            <Col sm={12} className='madarek' id='madarek'><div>
              <h5> <b>&#x26D4; &#x26D4;</b></h5>
              <p> &#x1F538;جهت ثبت نام و سریع کلاس ها با کادر مجرب بدون پایان خدمت , اول رانندگی یاد بگیر بعد رانندگی کنید </p>
              <p>&#x1F538; اول مقایسه کن بعد برو ثبت نام کن این آموزشگاه رانندگی جزیره هست در قلب جزیره می درخشد</p>
              <p>&#x1F538; اگه میخوای گواهینامه موتور و ماشین بگیری بیا آموزشگاه رانندگی جزیره قشم</p>

              <h5> <b>🚦 مدارک ثبت نام برای گواهینامه پایه سوم و موتورسیکلت 🚦</b></h5>

                  <p>&#x1F538; کپی شناسنامه</p>
                  <p>&#x1F538; کپی کارت ملی</p>
                  <p>&#x1F538; 6 قطعه عکس 3*4 سیاه سفید</p>

                  
            </div></Col>
          </Row>
        </Container>



                  {/* Morabian */}


        <Col className='morabi' id='morabi'><div>
          
          <Row className='row'>
            <Col sm={12} md={12}><div className='hoosh'>
              <img src={img} />
              <p style={{color:'red'}}>مدیریت آموزشگاه <p className='mp'>هوشیار</p></p>
            
              
            </div></Col>


            <h5><hr/>مربیان آموزشگاه</h5>


            <Col sm={6} md={3}>
            <div>
              <img src={imgyaser} />
               <p className='mp'>یاسر احمدی</p>

              
            </div>
              
            </Col>



            <Col sm={6} md={3}>
            <div>
              <img src={yavazi} />
               <p className='mp'>محمد یواضی</p>

              
            </div>
            </Col>



            <Col sm={6} md={3}>
            <div>
              <img src={hasan} />
               <p className='mp'>حسن پاکداری</p>

              
            </div>
            </Col>


          </Row>
        </div></Col>



                    {/* CALL */}


        
          <Row className='call' id='call'>

            <Col sm={6} className='call1'>
              
                <h3>ارتباط با ما</h3>
                <p  className='cc1'>شماره تلفن آموزشگاه  : <p className='c1'>987635248790+</p></p>
                <p  className='cc1'>هوشیار  : <p className='c1'>09107072337</p></p>
                <a href='https://www.instagram.com/amoozeshgah_jazire/' target={'#'} ><img className='logo' src={imga} width={30}/></a>

                <hr/>
              
            </Col>

            <Col sm={6} className='call1'>
            <div>
                <h3>آدرس آموزشگاه</h3>
                <p className='c1'>قشم، میدان حافظ بعد از راهنمایی رانندگی، ورودی دوم شهرک بوستان ، آموزشگاه رانندگی جزیره</p>

                
              </div>
            </Col>


            <Col className='aboutme'>
            <div>
              <p className='tabot'> طراح و برنامه نویس وبسایت : <a className='abdollah' href='http://abdollahchelasi.ir/' target={'#'}>عبدالله چلاسی</a></p>    
                      
            </div>
            </Col>
            
          </Row>
        
        

      </Container>
    </>

  )
}
export default Navb


