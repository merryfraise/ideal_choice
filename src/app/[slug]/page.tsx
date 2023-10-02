/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '@/components/atoms/Headings';
import Paragraph from '@/components/atoms/Paragraph';

const chosenStyle = css`
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
  p,
  table {
    color: var(--white);
  }

  h1 {
    padding-top: 16px;
    text-shadow: var(--white-glow);
  }

  p:not(:nth-of-type(2)) {
    padding-top: 16px;
  }

  .strong_container {
    font-weight: var(--semibold-weight);
  }

  table {
    width: 100%;
    margin: 34px 0;
    border: 1px solid var(--violet1);
    border-collapse: collapse;
    font-size: var(--small-font);
  }

  th,
  td {
    padding: 10px;
    border: 0.5px solid var(--violet1);
  }

  th {
    text-align: left;
  }

  .table_column {
    color: var(--violet1);
  }

  .additional_container {
    margin-top: 32px;
  }
`;

type ChosenPageProps = {
  params: {
    slug: string;
  };
};

export default function Chosen({ params }: ChosenPageProps) {
  const chosenData = data.choice.filter(
    (choice) => choice.id.toString() === params.slug
  );

  return (
    <div css={chosenStyle}>
      {chosenData.map((data) => (
        <div key={'article'}>
          <Link href={`/${data.id}/hidden`} key={'link'}>
            {data.chapter}
          </Link>
          <Headings heading="h1" key={'title'}>
            {data.title}
          </Headings>
          <div className="text_conatiner" key={'text container'}>
            <div className="strong_container" key={'strong container'}>
              <Paragraph key={'main text1'}>{data.first1}</Paragraph>
              {data.first2 ? (
                <Paragraph key={'main text2'}>{data.first2}</Paragraph>
              ) : null}
            </div>
            <Paragraph key={'main text3'}>{data.p1}</Paragraph>
            {data.p2 ? (
              <Paragraph key={'main text4'}>{data.p2}</Paragraph>
            ) : null}
            {data.p3 ? (
              <Paragraph key={'main text5'}>{data.p3}</Paragraph>
            ) : null}
            {data.p4 ? (
              <Paragraph key={'main text6'}>{data.p4}</Paragraph>
            ) : null}
            {data.table ? (
              <div className="table_container" key={'table container'}>
                <Paragraph key={'table text1'}>{data.before}</Paragraph>
                <table key={'table'}>
                  <thead key={'table head'}>
                    <tr key={'table row1'}>
                      <th className="table_column" key={'table head1'}>
                        {data.table.thead1}
                      </th>
                      <th key={'table head2'}>{data.table.thead2}</th>
                      <th key={'table head3'}>{data.table.thead3}</th>
                    </tr>
                  </thead>
                  <tbody key={'table body'}>
                    <tr key={'table row2'}>
                      <td className="table_column" key={'table body1'}>
                        {data.table.tbody1}
                      </td>
                      <td key={'table body2'}>{data.table.tbody2}</td>
                      <td key={'table body3'}>{data.table.tbody3}</td>
                    </tr>
                    <tr key={'table row3'}>
                      <td className="table_column" key={'table body4'}>
                        {data.table.tbody4}
                      </td>
                      <td key={'table body5'}>{data.table.tbody5}</td>
                      <td key={'table body6'}>{data.table.tbody6}</td>
                    </tr>
                    <tr key={'table row4'}>
                      <td className="table_column" key={'table body7'}>
                        {data.table.tbody7}
                      </td>
                      <td key={'table body8'}>{data.table.tbody8}</td>
                      <td key={'table body9'}>{data.table.tbody9}</td>
                    </tr>
                    <tr key={'table row5'}>
                      <td className="table_column" key={'table body10'}>
                        {data.table.tbody10}
                      </td>
                      <td key={'table body11'}>{data.table.tbody11}</td>
                      <td key={'table body12'}>{data.table.tbody12}</td>
                    </tr>
                  </tbody>
                </table>
                <Paragraph key={'table text2'}>{data.after1}</Paragraph>
                {data.after2 ? (
                  <Paragraph key={'table text3'}>{data.after2}</Paragraph>
                ) : null}
              </div>
            ) : null}
            {data.additional ? (
              <div
                className="additional_container"
                key={'additional container'}
              >
                <Paragraph key={'additional text'}>{data.additional}</Paragraph>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
