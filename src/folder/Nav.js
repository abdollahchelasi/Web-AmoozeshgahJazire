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
              <img src='data:image/png;base64,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' />
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


