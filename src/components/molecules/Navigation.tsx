/** @jsxImportSource @emotion/react */
'use client';

import React from 'react';
import Text from '../atoms/Text';
import { css } from '@emotion/react';

const navStyle = css`
  display: flex;
  font-size: var(--medium);
  color: var(--violet2);

  > div {
    margin-left: 40px;
  }
`;

export default function Navigation() {
  return (
    <nav css={navStyle}>
      <Text>이상적인 소개</Text>
      <Text>이상적인 응답자</Text>
      <Text>이상적인 질문</Text>
    </nav>
  );
}
