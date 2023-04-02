import React from 'react';
import avatarImg from '../../assets/img/avatar.png';
import s from './Avatar.module.css';

type Props = {
  alt?: string;
};

export default function Avatar({ alt = 'Profile photo' }: Props) {
  return (
    <div className={s.root}>
      <img className={s.img} src={avatarImg} alt={alt} />
    </div>
  )
}
