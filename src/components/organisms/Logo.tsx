/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';

const logoStyle = css`
  width: 600px;
  height: 600px;
`;

export default function Logo() {
  return <div css={logoStyle}>로고</div>;
}
