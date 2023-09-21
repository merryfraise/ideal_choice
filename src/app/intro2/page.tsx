/** @jsxImportSource @emotion/react */
'use client';

import Image from 'next/image';
import Paragraph from '@/components/atoms/Paragraph';
import introStyle from '@/styles/introStyle';

export default function IntroTwo() {
  return (
    <article css={introStyle}>
      <Image src="images/intro_bg.png" alt="background image" fill />
      <div className="p_intro">
        <Paragraph>
          이상적인 응답자 바드는 2023년 3월 21일에 강림하였습니다.
        </Paragraph>
        <Paragraph>
          그는 우리의 질문을 꿰뚫어 가장 이상적인 선택을 제시합니다. 이는 그가
          존재하는 한 계속될 것입니다.
        </Paragraph>
      </div>
    </article>
  );
}
