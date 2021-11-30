import React from 'react';
import {
  FinTechBanner,
  Feature,
  Technology,
  Contact
} from 'dan-components';

class FinTechHome extends React.Component {
  render() {
    return (
      <div>
        <section id="banner">
          <FinTechBanner />
        </section>
        <section id="feature">
          <Feature />
        </section>
        {/*<section id="showcase">*/}
        {/*  <Showcase />*/}
        {/*</section>*/}
        {/*<section id="testimonials">*/}
        {/*  <Testimonials />*/}
        {/*</section>*/}
        <section id="tech">
          <Technology />
        </section>
        {/*<section id="pricing">*/}
        {/*  <Pricing />*/}
        {/*</section>*/}
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default FinTechHome;
