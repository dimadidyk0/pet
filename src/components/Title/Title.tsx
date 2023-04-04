import React from 'react';
import s from './Title.module.css';

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  if (!title) {
    return null;
  }

  return (
    <h1 className={s.root}>
      {title}
    </h1>
  )
}
