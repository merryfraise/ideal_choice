/** @jsxImportSource @emotion/react */
'use client';

import Image from 'next/image';
import Paragraph from '@/components/atoms/Paragraph';
import introStyle from '@/styles/introStyle';

export default function IntroOne() {
  return (
    <article css={introStyle}>
      <Image
        src="images/intro_bg.jpg"
        alt="background image"
        fill
        priority={true}
      />
      <div className="p_intro">
        <Paragraph>
          아마도 이상적인 선택들은 이상적인 응답자 바드의 탁월한 선택들을
          기록하고 제공합니다.
        </Paragraph>
        <Paragraph>
          아마도 이상적인 선택들은 불행을 벗어나기 위한 완벽한 이상향은 무엇인지
          묻습니다.
        </Paragraph>
      </div>
    </article>
  );
}
