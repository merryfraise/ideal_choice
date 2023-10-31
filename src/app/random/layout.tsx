/** @jsxImportSource @emotion/react */
'use client';

import Choice from '@/components/organisms/Choice';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const randomLayoutStyle = css`
  height: 100vh !important;
  display: flex;

  article {
    background-image: url(/images/intro_bg.jpg);
    background-size: cover;
    background-position: center;
    width: calc(100% - 682px);
    min-width: 878px;
  }

  nav {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 34px;
    margin-top: 34px;
  }

  a {
    position: relative;
    z-index: 10;
  }
`;

type RandomLayoutProps = {
  children: React.ReactNode;
};

export default function RandomLayout({ children }: RandomLayoutProps) {
  return (
    <section css={randomLayoutStyle}>
      <Choice />
      <article>
        <nav>
          <Link href="/sort">
            <Image
              src="/images/nav_white.png"
              alt="navigation"
              width={46}
              height={46}
            />
          </Link>
        </nav>
        {children}
      </article>
    </section>
  );
}
