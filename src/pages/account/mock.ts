import {getUUID} from '@/utils';
import {ICard} from './type';

export const mockApiCards: ICard[] = [
  {
    id: getUUID(),
    title: '腾讯',
    children: [
      {
        id: getUUID(),
        title: '微信',
        account: 'test1234',
        password: 'password1234',
      },
      {
        id: getUUID(),
        title: 'QQ',
        account: 'test1234',
        password: 'password1234',
      },
    ],
  },
  {
    id: getUUID(),
    title: '银行卡',
    children: [
      {
        id: getUUID(),
        title: '招商银行',
        account: 'test1234',
        password: 'password1234',
      },
      {
        id: getUUID(),
        title: '工商银行',
        account: 'test1234',
        password: 'password1234',
      },
    ],
  },
];

export const initCards: ICard[] = mockApiCards.map(c => {
  return {
    ...c,
    expand: true,
    children: c.children.map(child => {
      return {
        ...child,
        renderPwd: child.password,
        cryptoPwd: '*'.repeat(child.password.length),
      };
    }),
  };
});
