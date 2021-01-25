import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with us? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBL3pDg2nabEzhR0nZ690GN0NXGSy3aQSYFkMzhBPo-Tk0Hg/viewform"
            >
              {btn || 'Join Us'}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
