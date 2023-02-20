import React from 'react';
// eslint-disable-next-line node/no-missing-import
import Layout from '@theme/Layout';
// eslint-disable-next-line node/no-missing-import
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Splash from '../components/Splash';
import Feature from '../components/Feature';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Splash />
      <main>
        <Feature />
      </main>
    </Layout>
  );
}
