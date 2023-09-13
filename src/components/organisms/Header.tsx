/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Headings from '../atoms/Headings';
import Navigation from '../molecules/Navigation';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 34px;
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <Headings heading="h1">아마도 이상적인 선택들</Headings>
      <Navigation />
    </header>
  );
}
