import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Type from 'dan-styles/Typography.scss';
import Hidden from '@material-ui/core/Hidden';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Slider from 'react-animated-slider';
// import imgApi from 'dan-api/images/fintech_img';
import imgApi from '../../api/images/fintech_img';
import avatarApi from 'dan-api/images/avatars';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';

const content = [
  {
    title: 'PROFESSIONAL TECHNOLOGY VALUE CREATORS',
    description:
      'WE MAKE TECHNOLOGY ACCESSIBLE!',
    button: {
      name: 'Our Services',
      url: '#tech'
    },
    image: imgApi[0],
    user: 'Luanda Gjokaj',
    userProfile: avatarApi[1]
  },
  {
    title: 'PROFESSIONAL TECHNOLOGY VALUE CREATORS',
    description:
      'WE MAKE TECHNOLOGY ACCESSIBLE!',
    button: {
      name: 'Contact US',
      url: '#contact'
    },
    image: imgApi[1],
    user: 'Erich Behrens',
    userProfile: avatarApi[8]
  },
  {
    title: 'PROFESSIONAL TECHNOLOGY VALUE CREATORS',
    description:
      'WE MAKE TECHNOLOGY ACCESSIBLE!',
    button: {
      name: 'Learn More',
      url: '#feature'
    },
    image: imgApi[1],
    user: 'Bruno Vizovskyy',
    userProfile: avatarApi[10]
  }
];

const AnimatedSlider = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index.toString()}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <Typography variant="h4" component="h1" className={Type.light} gutterBottom>{item.title}</Typography>
            <Hidden mdDown>
              <p>{item.description}</p>
            </Hidden>
            <Button component={AnchorLink} href={item.button.url} variant="contained" color="primary">
              {item.button.name}
            </Button>
          </div>
          {/*<section>*/}
          {/*  <img src={item.userProfile} alt={item.user} />*/}
          {/*  <span>*/}
          {/*    Posted by&nbsp;*/}
          {/*    <strong>*/}
          {/*      {item.user}*/}
          {/*    </strong>*/}
          {/*  </span>*/}
          {/*</section>*/}
        </div>
      ))}
    </Slider>
  </div>
);

export default AnimatedSlider;
