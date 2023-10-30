/** @jsxImportSource @emotion/react */
'use client';

import Text from '@/components/atoms/Text';
import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sortStyle = css`
  height: 100%;
  padding-top: 116px;
  overflow-y: scroll;

  .sort_container {
    border-top: solid 1px var(--violet1);
  }

  .subject_container {
    margin: 26px 0 0 16px;
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

type Choice = {
  id: number;
  sortId: number;
  question: string;
  list: Array<string>;
  bard: number;
  direction: string;
  chapter: string;
  title: string;
  first1: string;
  first2?: string;
  freason?: string;
  ereason?: string;
  reason?: Array<string>;
  ep1?: string;
  ep2?: string;
  ep3?: string;
  ep4?: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  p6?: string;
  p7?: string;
  before?: string;
  tablble?: object;
  after1?: string;
  after2?: string;
  additional?: string;
};

export default function Sort() {
  const [originalData, setOriginalData] = useState<Array<Choice>>([]);

  useEffect(() => setOriginalData(data.choice), []);

  return (
    <div css={sortStyle}>
      {data.sort.map((sort) => (
        <div className="sort_container" key={sort.id}>
          <div className="subject_container">
            <Text>{sort.subject}</Text>
          </div>
          <div className="choice_container">
            {originalData.map((choice) =>
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
