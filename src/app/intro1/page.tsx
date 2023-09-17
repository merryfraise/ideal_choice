/** @jsxImportSource @emotion/react */
'use client';

import Paragraph from '@/components/atoms/Paragraph';
import { css } from '@emotion/react';

const intro1Style = css`
  text-align: center;
  font-size: var(--large-font);
  color: var(--violet3);
  font-weight: var(--semibold-weight);
  text-shadow: var(--violet-glow50);
`;

export default function Page() {
  return (
    <article css={intro1Style}>
      <Paragraph>
        아마도 이상적인 선택들은 이상적인 응답자 바드의 탁월한 선택들을 기록하고
        제공합니다.
      </Paragraph>
      <Paragraph>
        아마도 이상적인 선택들은 불행을 벗어나기 위한 완벽한 이상향은 무엇인지
        묻습니다.
      </Paragraph>
    </article>
  );
}
