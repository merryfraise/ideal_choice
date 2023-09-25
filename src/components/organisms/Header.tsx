/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '../atoms/Headings';
import Navigation from '../molecules/Navigation';
import { usePathname } from 'next/navigation';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 34px;
`;

export default function Header() {
  const router = usePathname();

  if (router.includes('/random')) return null;
  return (
    <header css={headerStyle}>
      <Link href="/">
        <Headings heading="h1">아마도 이상적인 선택들</Headings>
      </Link>
      <Navigation />
    </header>
  );
}
