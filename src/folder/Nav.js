import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Col, Row, NavbarBrand, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect'
import icon from '../image/icon.png'

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
              <Nav.Link href='#' className='titlesite'>ویدیو ها</Nav.Link>
              <Nav.Link href="#madarek" className='titlesite'>مدارک</Nav.Link>
              <Nav.Link href="#morabi" className='titlesite'>مربیان</Nav.Link>
              <Nav.Link href='#' className='titlesite'>ارتباط با ما</Nav.Link>

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
                      .typeString('<span style="color: #27ae60;">آموزشگاه رانندگی جزیره</span> با چند سال سابقه کار')
                      .pauseFor(2000)
                      .deleteChars(20)
                      .typeString('و بهترین مربیان آموزشگاه')
                      .pauseFor(2000)
                      .deleteChars(24)
                      .typeString(' در جزیره زیبای قشم ')
                      .start()
                  }}
                />

                <div className='video'></div>

              </div>

              

            </Col>


          </Row>
        </Container>
      </Container>



      {/* safheAsli */}

      <Container fluid >

        <Container fluid className='contsafhe'>

          <Row>
            <Col sm={12} className='madarek' id='madarek'><div>
              <h5> <b>&#x26D4; شرایط و مدارک لازم جهت اخذ گواهینامه رانندگی پایه سه &#x26D4;</b></h5>
              <p> &#x1F538; دارا بودن سن ۱۸ سال تمام برای آقایان و خانمها</p>
              <p>&#x1F538; دارا بودن سواد خواندن و نوشتن برای افراد با سواد</p>
              <p>&#x1F538; دارا بودن ۳۰ سال سن تمام برای افراد بی سواد</p>

              <h5> <b>&#x26D4; مراحل اخذ گواهینامه پایه سوم &#x26D4;</b></h5>
              <p> &#x1F534;  1 - تهیه مدارک اولیه : </p>
              <p>&#x1F538;  مراجعه به آموزشگاه و ارائه مشخصات فردی و تهیه مدارک جهت ثبت نام </p>

              <p> &#x1F534;   2 - معاینات پزشکی :  </p>
              <p>&#x1F538;  پس از تهیه و تکمیل مدارک با مراجعه به آموزشگاه جهت دریافت فرم معاینات پزشکی  </p>

              <p> &#x1F534;   3 - مدارک تکمیلی مورد نیاز ثبت نام :  </p>
              <p>&#x1F538; اصل شناسنامه و در صورت داشتن توضیحات ( شناسنامه قدیم ) یک برگ کپی از صفحه توضیحات (شناسنامه های جدید صفحه اول و دوم )
              </p>
              <p>&#x1F538; اصل و کپی کارت ملی ، در صورت تعویض رسید پستی آن نیاز است.</p>
              <p>&#x1F538; ۹ قطعه عکس ۴*۳ تمام رخ رنگی جدید با زمینه سفید و بالباس تیره ، بدون عینک ، کلاه و کراوات و خانمها با حجاب اسلامی و مغایر با عکس شناسنامه
              </p>
              <p>&#x1F538; تعیین گروه خونی از سوی یکی از آزمایشگاه ها یا مراکز درمانی و قانونی معتبر
              </p>


              <p> &#x1F534;   4 -  آموزش تئوری :  </p>
              <p>&#x1F538;  گذراندن ۶ جلسه آیین نامه وقبولی در آزمون مقدماتی آیین نامه و ۲ جلسه فنی  </p>


              <p> &#x1F534;   5 -  آموزش عملی :  </p>
              <p>&#x1F538; با مراجعه به آموزشگاه ، ضمن تسویه حساب بر نامه عملی شهر خود را دریافت می نمائید.
              </p>
              <p>&#x1F538;

                گذراندن ۲۴ ساعت آموزش رانندگی در ۱۲ جلسه و آزمون مقدماتی مهارت رانندگی در جلسه آخر توسط مربی مربوطه
              </p>


              <p> &#x1F534;   6 - (صدور کاردکس ) مدارک مورد نیاز :  </p>
              <p>&#x1F538;  متقاضی گواهینامه می تواند با همراه داشتن کامل پرونده ( اصل مدرک شناسایی ، کارت ملی و کارت پایان خدمت و معافیت ،گواهی اشتغال به تحصیل )جهت صدور کاردکس و شرکت در آزمون آیین نامه و عملی شهر با پرداخت وجوه مصوب راهنمایی و رانندگی در روزهای آزمون اقدام نمائید.  </p>


              <p> &#x1F534;   7 - شرکت در آزمون آیین نامه  </p>
              <p> &#x1F534;   8 - شرکت در آزمون عملی شهر  </p>


              <p>&#x1F538;  توجه ۱: گذراندن کلاسهای اضافی در صورت مردودی الزامی است که از سوی افسر آزمون گیرنده تعیین و به هنرجو اعلامی می شود .  </p>
              <p>&#x1F538;  توجه ۲: آزمون مجدد آیین نامه و عملی شهر : فیش واریزی برابر مصوبه ابلاغی پلیس راهور که در محل آموزشگاه رانندگی به اطلاع هنرجو می رسد.  </p>

              <p> &#x1F534;   9 - تکمیل پرونده ها :  </p>
              <p>&#x1F538;  در صورت قبولی مرحله شهر تحویل تمام پرونده به آموزشگاه جهت ثبت قبولی و انجام امور اداری و تحویل رسید پستی به هنرجو و ارسال مدارک برای صدور گواهینامه الزامی است.  </p>

            </div></Col>
          </Row>
        </Container>






        <Col className='morabi' id='morabi'><div>
          <h5>مربیان آموزشگاه</h5>
          <Row className='row'>
            <Col sm={6} md={3}><div>
              <img src='' />
              <p>Ali</p>
            </div></Col>
            <Col sm={6} md={3}>a</Col>
            <Col sm={6} md={3}>a</Col>
            <Col sm={6} md={3}>a</Col>
          </Row>
        </div></Col>
      </Container>
    </>

  )
}
export default Navb


