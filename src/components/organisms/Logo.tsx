/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Image from 'next/image';

const logoStyle = css`
  position: relative;
  margin: 40px;

  img {
    filter: drop-shadow(var(--violet-glow50));
  }

  .diagonal_container,
  .center_container {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .straight_container {
    width: 576px;
    height: 576px;
  }

  .diagonal_container {
    width: 234px;
    height: 234px;
    margin-left: -117px;
    margin-top: -117px;
  }

  .center_container {
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
  }
`;

export default function Logo() {
  return (
    <div className="img_logo" css={logoStyle}>
      <div className="straight_container">
        <Image
          src="/images/logo_straight.png"
          alt="logo"
          width={576}
          height={576}
          priority={true}
        />
      </div>
      <div className="diagonal_container">
        <Image
          src="/images/logo_diagonal.png"
          alt="logo"
          width={234}
          height={234}
        />
      </div>
      <div className="center_container">
        <Image
          src="/images/logo_center.png"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
