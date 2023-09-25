/** @jsxImportSource @emotion/react */
'use client';

import Choice from '@/components/organisms/Choice';
import { css } from '@emotion/react';
import React from 'react';

const choiceLayoutStyle = css`
  height: 100vh !important;
  display: flex;
`;

type ChoiceLayoutProps = {
  children: React.ReactNode;
};

export default function ChoiceLayout({ children }: ChoiceLayoutProps) {
  return (
    <section css={choiceLayoutStyle}>
      <Choice />
      <article>
        <nav></nav>
        {children}
      </article>
    </section>
  );
}
