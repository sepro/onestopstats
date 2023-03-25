import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const {siteConfig} = useDocusaurusContext();
  const latestBlogPosts = siteConfig.customFields.latestBlogPosts || [];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {latestBlogPosts.slice(0, 3).map((post, idx) => (
            <Feature
              key={idx}
              title={post.title}
              imageUrl={post.metadata.image}
              description={post.description}
              link={post.permalink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}