import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="個人技術筆記與架構實踐">
      <main style={{ 
        minHeight: '75vh', 
        background: '#0d1117',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}>
        <h1 style={{
          color: '#f0f6fc',
          fontSize: '2.8rem',
          fontWeight: '800',
          letterSpacing: '0.05em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          Vlorion <span style={{ color: '#58a6ff', margin: '0 0.8rem', fontWeight: '900' }}>|</span> 視界渲染
        </h1>
      </main>
    </Layout>
  );
}
