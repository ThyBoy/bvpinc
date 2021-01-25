import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, img } = hero;

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
    <div>
      <div className="empty-bar" />
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="title-bvpinc">
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 400,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              </Tilt>
              <h1> </h1>
            </div>
            <h1 className="hero-title">
              {title || 'BVPInc  '}
              <span className="text-color-main">{name || 'Student Chapter'}</span>
            </h1>
            <h1 className="hero-title2">
              {subtitle ||
                'The Alpha Business Society of BVCOE, Bringing the Business Realm into Technology.'}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeBL3pDg2nabEzhR0nZ690GN0NXGSy3aQSYFkMzhBPo-Tk0Hg/viewform"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  Join Us
                </a>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default Header;
