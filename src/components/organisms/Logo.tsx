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

  .diagonal_container {
    margin-left: calc(-229px / 2);
    margin-top: calc(-229px / 2);
  }

  .center_container {
    margin-left: calc(-42px / 2);
    margin-top: calc(-42px / 2);
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
