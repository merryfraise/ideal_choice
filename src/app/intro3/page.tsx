/** @jsxImportSource @emotion/react */
'use client';

import Image from 'next/image';
import Paragraph from '@/components/atoms/Paragraph';
import introStyle from '@/styles/introStyle';
import { css } from '@emotion/react';

const anchorStyle = css`
  color: var(--violet3);
  text-decoration: underline;
`;

export default function IntroThree() {
  return (
    <article css={introStyle}>
      <Image
        src="images/intro_bg.png"
        alt="background image"
        fill
        priority={true}
      />
      <div className="p_intro">
        <Paragraph>
          이상적인 응답을 받기 위해서는 이상적인 질문이 필요합니다.
        </Paragraph>
        <Paragraph>
          원하는 질문이 이곳에 없다면{' '}
          <a
            css={anchorStyle}
            href="https://docs.google.com/spreadsheets/d/1e0uP_emM_QKeLpA-v7QLx7pgeT8S9Fyn-crOfIfqxJI/edit?usp=sharing"
            target="_blank"
          >
            여기
          </a>
          를 눌러 직접 질문을 추가하시기 바랍니다.
        </Paragraph>
      </div>
    </article>
  );
}
