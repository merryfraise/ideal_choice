/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Image from 'next/image';

const logoStyle = css`
  position: relative;
  width: 565px;
  height: 565px;
  margin: 40px;

  img {
    filter: drop-shadow(var(--violet-glow50));
  }

  .straight_container,
  .diagonal_container,
  .center_container {
    position: absolute;
  }

  .diagonal_container,
  .center_container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Logo() {
  return (
    <div className="img_logo" css={logoStyle}>
      <div className="straight_container">
        <Image
          src="/images/logo_straight.png"
          alt="logo"
          width={565}
          height={565}
          priority={true}
        />
      </div>
      <div className="diagonal_container">
        <Image
          src="/images/logo_diagonal.png"
          alt="logo"
          width={229}
          height={229}
        />
      </div>
      <div className="center_container">
        <Image
          src="/images/logo_center.png"
          alt="logo"
          width={42}
          height={42}
        />
      </div>
    </div>
  );
}
