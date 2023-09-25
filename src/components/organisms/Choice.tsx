/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '../atoms/Headings';

const choiceStyle = css`
  width: 682px;
  height: 100%;
  border-right: solid 2px var(--violet1);

  header {
    padding: 34px;
  }
`;

export default function Choice() {
  return (
    <aside css={choiceStyle}>
      <header>
        <Link href="/">
          <Headings heading="h1">아마도 이상적인 선택들</Headings>
        </Link>
      </header>
      <div style={{ color: 'white' }}>테스트</div>
    </aside>
  );
}
