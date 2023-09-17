/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { css } from '@emotion/react';

const navStyle = css`
  display: flex;
  font-size: var(--medium);
  color: var(--violet2);

  a:not(:first-child) {
    margin-left: 40px;
  }
`;

export default function Navigation() {
  return (
    <nav css={navStyle}>
      <Link href="/intro1">이상적인 소개</Link>
      <Link href="/intro2">이상적인 응답자</Link>
      <Link href="/intro3">이상적인 질문</Link>
    </nav>
  );
}
