/** @jsxImportSource @emotion/react */
'use client';

import Text from '@/components/atoms/Text';
import Logo from '@/components/organisms/Logo';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const mainStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--violet3);
  font-size: var(--small-font);
  text-shadow: var(--violet-glow50);

  .logo {
    display: flex;
    align-items: center;
    font-size: var(--large-font);
    font-weight: var(--semibold-weight);
  }

  a {
    .logo > div:nth-of-type(odd),
    .start {
      text-shadow: var(--violet-glow50);
      transition: opacity ease-out 0.5s;
    }

    .straight_container,
    .diagonal_container,
    .center_container {
      transition: transform ease-out 0.5s;
    }
  }

  a:hover {
    .logo > div:nth-of-type(odd),
    .start {
      opacity: 0;
    }

    .straight_container {
      transform: rotate(-90deg);
    }

    .diagonal_container {
      transform: rotate(90deg);
    }

    .center_container {
      transform: rotate(45deg);
    }
  }

  .start {
    text-align: center;
  }
`;

export default function Home() {
  return (
    <section css={mainStyle}>
      <Image
        src="/images/main_bg.png"
        alt="background image"
        fill
        priority={true}
      />
      <Link href="/random">
        <div className="logo">
          <Text>A</Text>
          <Logo />
          <Text>B</Text>
        </div>
        <div className="start">
          <Text>눌러서 시작하기</Text>
        </div>
      </Link>
    </section>
  );
}
