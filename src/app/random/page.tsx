/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';

const RandomStyle = css`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    padding: 12px;
  }

  a {
    color: var(--white);
    font-size: 46px;
    font-weight: var(--semibold-weight);
  }

  a:hover {
    font-size: 48px;
    text-shadow: var(--white-glow);
  }
`;

export default function Random() {
  return (
    <div css={RandomStyle}>
      <ul className="before">
        {data.choice.map((choice) => (
          <li key={choice.id}>
            <Link href={`/${choice.id}`}>{choice.question}</Link>
          </li>
        ))}
      </ul>
      <ul className="after">
        {data.choice.map((choice) => (
          <li key={choice.id}>
            <Link href={`/${choice.id}`}>{choice.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
