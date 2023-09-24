/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';

const choiceStyle = css`
  width: 682px;
  height: 100%;
  border-right: solid 2px var(--violet1);
`;

export default function Choice() {
  return (
    <aside css={choiceStyle}>
      <div style={{ color: 'white' }}>테스트</div>
    </aside>
  );
}
