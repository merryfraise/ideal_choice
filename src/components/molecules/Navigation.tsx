/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { css } from '@emotion/react';
import { usePathname } from 'next/navigation';

const navStyle = css`
  display: flex;
  font-size: var(--medium-font);
  color: var(--violet2);

  a:not(:first-of-type) {
    margin-left: 40px;
  }
`;

export default function Navigation() {
  const router = usePathname();

  return (
    <nav css={navStyle}>
      <Link href="/intro1" className={router === '/intro1' ? 'active' : ''}>
        이상적인 소개
      </Link>
      <Link href="/intro2" className={router === '/intro2' ? 'active' : ''}>
        이상적인 응답자
      </Link>
      <Link href="/intro3" className={router === '/intro3' ? 'active' : ''}>
        이상적인 질문
      </Link>
    </nav>
  );
}
