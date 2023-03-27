import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Clear and concise definitions',
    Svg: "img/bird_1.png",
    description: (
      <>
         All statistical terms are defined in an easily understandable way.
      </>
    ),
  },
  {
    title: 'Practical examples',
    Svg: "img/bird_2.png",
    description: (
      <>
        Each statistical concept is accompanied by an example to help students understand it better.
      </>
    ),
  },
  {
    title: 'Free and accessible',
    Svg: "img/bird_3.png",
    description: (
      <>
        The site is available for free, making it accessible to all students who need it.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}