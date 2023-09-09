import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
};

export default function ParagraphComponent({ children }: ParagraphProps) {
  return <p>{children}</p>;
}
