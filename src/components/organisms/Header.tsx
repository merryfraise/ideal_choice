/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '../atoms/Headings';
import Navigation from '../molecules/Navigation';
import Route from '@/utils/Route';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 34px;

  a {
    white-space: nowrap;
  }
`;

export default function Header() {
  const route = Route();

  if (route.length >= 2 && !route.includes('/intro')) return null;
  return (
    <header css={headerStyle}>
      <Link href="/">
        <Headings heading="h1">아마도 이상적인 선택들</Headings>
      </Link>
      <Navigation />
    </header>
  );
}
