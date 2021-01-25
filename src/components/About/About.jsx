import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Us" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'BVPInc is a team of strong-minded, competent students with an eye for business, hoping to establish an environment where everyone works to bring positive changes in the corporate world.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'It’s the most prominent business society at Bharati Vidyapeeth’s College of Engineering, New Delhi, and focuses on providing quality guidance when it comes to working in the corporate sector. We believe that every student is a born leader who, if provided with an opportunity, can shine by discovering his/her capabilities.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    ' Our team encourages its members to lead and present their ideas before audiences. We have a constant desire to push budding entrepreneurs forward and welcome them back with open arms. The BVPInc Student Chapter actively supports startups and new ventures initiated by students at the college level.'}
                </p>
                <p style={{ cursor: 'pointer' }}>
                  <span className="cta-btn cta-btn--resume">
                    <Link to="teams" smooth duration={1000}>
                      About The Team
                    </Link>
                  </span>
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
