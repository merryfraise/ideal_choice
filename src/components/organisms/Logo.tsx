/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Image from 'next/image';

const logoStyle = css`
  position: relative;
  margin: 0 40px 40px 40px;

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
    width: 490px;
    height: 490px;
  }

  .diagonal_container {
    width: 200px;
    height: 200px;
    margin-left: -100px;
    margin-top: -100px;
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
          width={490}
          height={490}
          priority={true}
        />
      </div>
      <div className="diagonal_container">
        <Image
          src="/images/logo_diagonal.png"
          alt="logo"
          width={200}
          height={200}
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
