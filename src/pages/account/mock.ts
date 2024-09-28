import {getUUID} from '@/utils';
export const mockCards = [
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
