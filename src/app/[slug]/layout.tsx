/** @jsxImportSource @emotion/react */
'use client';

import Choice from '@/components/organisms/Choice';
import Route from '@/utils/Route';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const choicedLayoutStyle = css`
  height: 100vh !important;
  display: flex;

  article {
    width: calc(100% - 682px);
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 34px;
  }

  img {
    transform: rotate(45deg);
  }
`;

type ChoicedLayoutProps = {
  children: React.ReactNode;
};

export default function ChoiceLayout({ children }: ChoicedLayoutProps) {
  return (
    <section css={choicedLayoutStyle}>
      <Choice />
      <article>
        <nav>
          <Link href="/random">
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
