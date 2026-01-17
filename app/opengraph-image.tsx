import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Onflow - Test and improve product flows';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f1a 100%)',
          position: 'relative',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(14, 112, 249, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(6, 50, 104, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Onflow Logo */}
          <svg
            width="180"
            height="180"
            viewBox="0 0 300 300"
            fill="none"
            style={{ marginBottom: '32px' }}
          >
            <defs>
              <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(6, 50, 104, 1)" />
                <stop offset="100%" stopColor="#0e70f9" />
              </linearGradient>
            </defs>
            <path
              d="M66.9172 198.088C87.3172 247.288 137.084 264.588 159.417 267.088C126.417 270.588 92.4172 254.588 77.9172 242.588C63.4172 230.588 41.4172 206.588 35.4172 170.088C29.4172 133.588 42.9172 90.5884 67.4172 67.0884C91.9172 43.5884 120.44 33.2099 147.917 32.0884C172.417 31.0884 216.217 38.0884 245.417 78.0884C281.917 128.088 269.417 209.588 202.417 230.588C135.417 251.588 103.917 201.088 96.9172 178.088C89.9172 155.088 95.4172 105.088 149.417 98.0884C181.453 93.9356 203.973 116.088 204.417 143.088C204.705 160.588 193.019 178.088 172.917 178.088C144.917 178.088 133.417 162.588 140.417 136.588C109.417 162.088 137.917 200.588 170.417 200.588C185.417 200.588 200.315 197.27 212.917 187.088C229.23 173.908 237.88 150.579 229.417 122.088C214.417 71.5884 172.417 58.5884 130.417 67.0884C88.4172 75.5884 41.4172 136.588 66.9172 198.088Z"
              fill="url(#gradBlue)"
            />
          </svg>

          {/* Brand name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
              marginBottom: '16px',
            }}
          >
            Onflow
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Test and improve product flows with AI agents
          </div>
        </div>

        {/* Domain URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          runonflow.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
