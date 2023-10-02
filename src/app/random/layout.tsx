/** @jsxImportSource @emotion/react */
'use client';

import Choice from '@/components/organisms/Choice';
import Route from '@/utils/Route';
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
    width: calc(100% - 682px);
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 34px;
  }
`;

type RandomLayoutProps = {
  children: React.ReactNode;
};

export default function ChoiceLayout({ children }: RandomLayoutProps) {
  const route = Route();

  return (
    <section css={randomLayoutStyle}>
      <Choice />
      <article>
        <nav>
          {route.includes('/sort') ? (
            <Link href="/random">
              <Image
                src="/images/nav_violet.png"
                alt="navigation"
                width={46}
                height={46}
              />
            </Link>
          ) : (
            <Link href="/random/sort">
              <Image
                src="/images/nav_white.png"
                alt="navigation"
                width={46}
                height={46}
              />
            </Link>
          )}
        </nav>
        {children}
      </article>
    </section>
  );
}
