import React from 'react';

type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return <div>{children}</div>;
}
