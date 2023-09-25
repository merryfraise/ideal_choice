/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { css } from '@emotion/react';
import Route from '@/utils/Route';

const navStyle = css`
  display: flex;
  font-size: var(--medium-font);
  color: var(--violet2);

  a:not(:first-of-type) {
    margin-left: 40px;
  }
`;

export default function Navigation() {
  const route = Route();

  return (
    <nav css={navStyle}>
      <Link href="/intro1" className={route === '/intro1' ? 'active' : ''}>
        이상적인 소개
      </Link>
      <Link href="/intro2" className={route === '/intro2' ? 'active' : ''}>
        이상적인 응답자
      </Link>
      <Link href="/intro3" className={route === '/intro3' ? 'active' : ''}>
        이상적인 질문
      </Link>
    </nav>
  );
}
