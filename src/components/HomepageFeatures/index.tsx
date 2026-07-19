import React, { type ReactNode } from 'react';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Edge Performance',
    description: <>雲端邊緣部署，極致的存取響應速度與全球分佈式架構。</>,
  },
  {
    title: 'Passkey Security',
    description: <>基於 WebAuthn 標準，打造安全、無密碼的核心身分認證體驗。</>,
  },
  {
    title: 'Modern Stack',
    description: <>深度整合 Next.js 與 Tailwind v4，實踐極致的前端現代化開發。</>,
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section style={{ padding: '4rem 0', background: '#161b22' }}>
      <div className="container">
        <div className="row">
          {FeatureList.map((f, idx) => (
            <div key={idx} className="col col--4" style={{ textAlign: 'center', padding: '0 2rem', color: '#c9d1d9' }}>
              <Heading as="h3" style={{ color: '#58a6ff', marginBottom: '1rem' }}>{f.title}</Heading>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
