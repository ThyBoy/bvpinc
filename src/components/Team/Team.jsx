import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import TeamImg from '../Image/TeamImg';

const Team = () => {
  const { team } = useContext(PortfolioContext);

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
    <section id="teams">
      <Container>
        <div className="team-wrapper">
          <Title title="Meet The Team" />
          {team.map((row) => {
            const { id1, data } = row;

            return (
              <Row key={id1}>
                {data.map((member) => {
                  const { name, position, img, id, fade } = member;

                  return (
                    <Col key={id}>
                      <Fade
                        left={isDesktop && fade[0]}
                        right={isDesktop && fade[1]}
                        top={isDesktop && fade[2]}
                        bottom={isMobile || fade[3]}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="member-wrapper">
                          <div className="member-wrapper__image">
                            <Tilt
                              options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 0.9,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                              }}
                            >
                              <div data-tilt>
                                <TeamImg alt={position} filename={img} />
                              </div>
                            </Tilt>
                          </div>
                          <div className="member-wrapper__text">
                            <h3 className="member-wrapper__text-name">{name || 'Name'}</h3>
                            <h3 className="member-wrapper__text-position">
                              {position || 'Position'}
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Team;
