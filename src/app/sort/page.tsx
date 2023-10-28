/** @jsxImportSource @emotion/react */
'use client';

import Text from '@/components/atoms/Text';
import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';

const sortStyle = css`
  height: 100%;
  padding-top: 116px;
  overflow-y: scroll;

  .sort_container {
    border-top: solid 1px var(--violet1);
  }

  .subject_container {
    margin: 10px;
    color: var(--violet3);
    font-size: var(--small-font);
  }

  .choice_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 0 34px 16px;
  }

  .choice_box {
    margin-top: 34px;
    margin-right: 16px;
  }

  a {
    color: var(--white);
    font-size: var(--small-font);
  }

  a:hover {
    text-shadow: var(--white-glow);
  }
`;

export default function Sort() {
  return (
    <div css={sortStyle}>
      {data.sort.map((sort) => (
        <div className="sort_container" key={sort.id}>
          <div className="subject_container">
            <Text>{sort.subject}</Text>
          </div>
          <div className="choice_container">
            {data.choice.map((choice) =>
              sort.id === choice.sortId ? (
                <div className="choice_box" key={`choice ${choice.id}`}>
                  <Link href={`/${choice.id}`}>{choice.question}</Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
