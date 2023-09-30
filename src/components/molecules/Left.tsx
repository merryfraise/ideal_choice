/** @jsxImportSource @emotion/react */
'use client';

import Route from '@/utils/Route';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const leftStyle = css`
  position: relative;
  width: 394px;
  height: 394px;

  .logo_container {
    width: 100%;
    height: 100%;
  }

  .direction_container,
  .center_container {
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .direction_container {
    width: 360px;
    height: 360px;
    margin-left: -180px;
    margin-top: -180px;
  }

  .center_container {
    width: 28px;
    height: 28px;
    margin-left: -14px;
    margin-top: -14px;
  }

  .logo_container:hover {
    img {
      filter: drop-shadow(var(--violet-glow50));
    }
  }
`;

export default function Left() {
  const route = Route();
  const logoRef = useRef<HTMLDivElement>(null); // ref of logo container
  const center = { x: 340, y: 489.5 }; // coordinate of logo container

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      const x = center.x - event.clientX;
      const y = center.y - event.clientY;

      if (x >= 99 && y >= 99.5) {
      } else if (x <= -99 && y >= 99.5) {
      } else if (x <= -99 && y <= -99.5) {
      } else if (x >= 99 && y <= -99.5) {
      } else if (y >= 99.5) {
      } else if (x <= -99) {
      } else if (y <= -99.5) {
      } else if (x >= 99) {
      }

      console.log(x, y);
    });
  }, []);

  return (
    <div css={leftStyle}>
      {route.includes('/choice') ? null : (
        <div className="logo_container" ref={logoRef}>
          <div className="direction_container">
            <Image
              src="/images/left_direction.png"
              alt="logo"
              width={360}
              height={360}
              priority={true}
            />
          </div>
          <div className="center_container">
            <Image
              src="/images/left_center.png"
              alt="logo"
              width={28}
              height={28}
              priority={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
