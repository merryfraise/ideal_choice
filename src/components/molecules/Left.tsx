/** @jsxImportSource @emotion/react */
'use client';

import Route from '@/utils/Route';
import { css } from '@emotion/react';
import Image from 'next/image';

const leftStyle = css`
  position: relative;
  width: 360px;
  height: 360px;

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
  return (
    <div css={leftStyle}>
      {route.includes('/choice') ? null : (
        <div className="logo_container">
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
