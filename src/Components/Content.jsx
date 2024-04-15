import React, { useRef } from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function Content() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  

  const scrollToBottom = useRef(null);

  const handleScroll = () => {
    scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="form">
        <Carousel fade>
          {imageUrls.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={imageUrl}
                alt="Slide"
              />
              <Carousel.Caption>
                <h2>Generate more leads with professionals</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" required />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section
        className="cards"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <div style={{ fontSize: "3rem" }}>➡️</div>
          <Card.Body>
            <Card.Title>Fully Responsive</Card.Title>
            <Card.Text>
              This theme will look great on any device, no matter the size!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <div style={{ fontSize: "3rem" }}>ℹ️</div>
          <Card.Body>
            <Card.Title>Bootstrap 5 Ready</Card.Title>
            <Card.Text>
              Featuring the latest build of the new Bootstrap 5 framework!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", textAlign: "center" }}>
          <div style={{ fontSize: "3rem" }}>🆗</div>
          <Card.Body>
            <Card.Title>Easy to Use</Card.Title>
            <Card.Text>
              Ready to use with your own content, or customize the source files!
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section>
        <style>{`
          .no-gutters .card {
            margin: 0;
            padding: 0;
          }
        `}</style>
        <Container fluid>
          <Row className="no-gutters">
            <Col md={6}>
              <Card className="text-card">
                <Card.Body>
                  <div className="text-content">
                    <Card.Title className="text-center">
                      Fully Responsive Design
                    </Card.Title>
                    <Card.Text>
                      When you use a theme created by Start Bootstrap, you know
                      that the theme will look great on any device, whether it's
                      a phone, tablet, or desktop the page will behave
                      responsively!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="image-card">
                <Card.Img
                  src="https://images.pexels.com/photos/1366998/pexels-photo-1366998.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Image"
                  className="img-fluid"
                />
              </Card>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col md={6}>
              <Card className="image-card">
                <Card.Img
                  src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Image"
                  className="img-fluid"
                />
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-card">
                <Card.Body>
                  <div className="text-content">
                    <Card.Title className="text-center">
                      Updated For Bootstrap 5
                    </Card.Title>
                    <Card.Text>
                      Newly improved, and full of great utility classes,
                      Bootstrap 5 is leading the way in mobile responsive web
                      development! All of the themes on Start Bootstrap are now
                      using Bootstrap 5!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col md={6}>
              <Card className="text-card">
                <Card.Body>
                  <div className="text-content">
                    <Card.Title className="text-center">
                      Easy to Use & Customize
                    </Card.Title>
                    <Card.Text>
                      Landing Page is just HTML and CSS with a splash of SCSS
                      for users who demand some deeper customization options.
                      Out of the box, just add your content and images, and your
                      new landing page will be ready to go!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="image-card">
                <Card.Img
                  src="https://images.pexels.com/photos/5829726/pexels-photo-5829726.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Image"
                  className="img-fluid"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f5f5f5", height: "50vh" }}>
        <Container className="custom-container">
          <h2 className="text-center mb-4 head">What people are saying...</h2>
          <Row className="justify-content-center">
            <Col xs={6} md={4} className="text-center">
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                roundedCircle
                className="pics"
              />
              <div className="mt-2">
                <strong>Margaret E.</strong>
                <p>"This is fantastic! Thanks so much guys!"</p>
              </div>
            </Col>
            <Col xs={6} md={4} className="text-center">
              <Image
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                roundedCircle
                className="pics"
              />
              <div className="mt-2">
                <strong>Fred S.</strong>
                <p>
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </Col>
            <Col xs={6} md={4} className="text-center">
              <Image
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                roundedCircle
                className="pics"
              />
              <div className="mt-2">
                <strong>Sarah W.</strong>
                <p>
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="form" style={{ position: "relative", height: "300px" }}>
      <img
        className="d-block w-100 carousel-image"
        src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Slide"
        style={{ height: "100%" }}
      />
      <div
        className="carousel-caption"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ color: "white" }}>
          Generate more leads with professionals
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <div id="bottom" style={{ marginBottom: "300px" }}></div>
    </section>
    </div>
  );
}

export default Content;
