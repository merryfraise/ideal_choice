/** @jsxImportSource @emotion/react */
'use client';

import Text from '@/components/atoms/Text';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const mainStyle = css`
  color: var(--violet3);
  font-size: var(--small-font);
  text-shadow: var(--violet-glow50);

  .logo {
    display: flex;
    justify-content: space-between;
    font-size: var(--large-font);
    font-weight: var(--semibold-weight);
  }
`;

export default function Home() {
  return (
    <>
      <Image src="/images/main_bg.png" alt="background image" fill />
      <Link href="/random" css={mainStyle}>
        <div className="logo">
          <Text>A</Text>
          <Text>B</Text>
        </div>
        <Text>눌러서 시작하기</Text>
      </Link>
    </>
  );
}
