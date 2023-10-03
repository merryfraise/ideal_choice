/** @jsxImportSource @emotion/react */
'use client';

import Choice from '@/components/organisms/Choice';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const sortLayoutStyle = css`
  height: 100vh !important;
  display: flex;

  article {
    background-image: url(/images/intro_bg.jpg);
    background-size: cover;
    width: calc(100% - 682px);
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

type SortLayoutProps = {
  children: React.ReactNode;
};

export default function SortLayout({ children }: SortLayoutProps) {
  return (
    <section css={sortLayoutStyle}>
      <Choice />
      <article>
        <nav>
          <Link href="/random">
            <Image
              src="/images/nav_violet.png"
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
