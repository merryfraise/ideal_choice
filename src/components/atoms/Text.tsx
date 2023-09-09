import React from 'react';

type TextProps = {
  children: React.ReactNode;
};

export default function TextComponent({ children }: TextProps) {
  return <div>{children}</div>;
}
