/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '@/components/atoms/Headings';
import Paragraph from '@/components/atoms/Paragraph';

const choicedStyle = css`
  height: calc(100% - 116px);
  padding: 34px 164px 116px 164px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  a {
    font-size: var(--small-font);
  }

  h1,
  p {
    color: var(--white);
  }

  h1 {
    padding-top: 16px;
    text-shadow: var(--white-glow);
  }

  p:not(:nth-of-type(2)) {
    padding-top: 16px;
  }

  p:first-of-type,
  p:nth-of-type(2) {
    font-weight: var(--semibold-weight);
  }
`;

type ChoicedPageProps = {
  params: {
    slug: string;
  };
};

export default function Choiced({ params }: ChoicedPageProps) {
  const choicedData = data.choice.filter(
    (choice) => choice.id.toString() === params.slug
  );

  return (
    <div css={choicedStyle}>
      {choicedData.map((data) => (
        <>
          <Link href={`/${data.id}/hidden`} key={1}>
            {data.chapter}
          </Link>
          <Headings heading="h1" key={2}>
            {data.title}
          </Headings>
          <div className="text_conatiner">
            <Paragraph key={3}>{data.first1}</Paragraph>
            <Paragraph key={4}>{data.first2}</Paragraph>
            <Paragraph key={5}>{data.p1}</Paragraph>
            <Paragraph key={6}>{data.p2}</Paragraph>
            <Paragraph key={7}>{data.p3}</Paragraph>
            <Paragraph key={8}>{data.p4}</Paragraph>
          </div>
        </>
      ))}
    </div>
  );
}
