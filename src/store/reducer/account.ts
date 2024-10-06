import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {produce} from 'immer';
import {ICard} from '@/pages/account/type';
import {initCards} from '@/pages/account/mock';

interface IAccountState {
  accountCard: ICard[];
}

const initialState: IAccountState = {
  accountCard: initCards,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    toggleCardExpand: produce(
      (draft: IAccountState, action: PayloadAction<{id?: string}>) => {
        const {accountCard} = draft;
        const {id} = action.payload;
        const activeIndx = accountCard.findIndex(item => item.id === id);
        if (~activeIndx) {
          const activeCard = accountCard[activeIndx];
          // map 代替 splice
          draft.accountCard = accountCard.map(d => {
            if (d.id === id) {
              return {...d, expand: !activeCard.expand};
            }
            return d;
          });
        }
      },
    ),
    editCard: produce(
      (
        draft: IAccountState,
        action: PayloadAction<{cardId?: string; childId?: string}>,
      ) => {
        const {cardId, childId} = action.payload;
        const {accountCard} = draft;
        const activeIndx = accountCard.findIndex(item => item.id === cardId);
        if (~activeIndx) {
          const curCard = accountCard[activeIndx];
          const curChild = curCard.children.find(c => c.id === childId);
          console.log('curChild', curChild);
        }
      },
    ),
    deleteCard: produce(
      (
        draft: IAccountState,
        action: PayloadAction<{cardId?: string; childId?: string}>,
      ) => {
        const {accountCard} = draft;
        const {cardId, childId} = action.payload;
        const activeIndx = accountCard.findIndex(item => item.id === cardId);
        if (~activeIndx) {
          // map 代替 splice
          draft.accountCard = accountCard.map(d => {
            if (d.id === cardId) {
              return {
                ...d,
                expand: false,
                children: d.children.filter(c => c.id !== childId),
              };
            }
            return d;
          });
        }
      },
    ),
    togglePwdVisible: produce(
      (draft: IAccountState, action: PayloadAction<{visible: boolean}>) => {
        const {accountCard} = draft;
        const {visible} = action.payload;
        draft.accountCard = accountCard.map(d => {
          return {
            ...d,
            children: d.children.map(c => {
              return {
                ...c,
                renderPwd: visible ? c.password : c.cryptoPwd,
              };
            }),
          };
        });
      },
    ),
    resetAccountCard: produce((draft: IAccountState) => {
      draft.accountCard = initCards;
    }),
  },
});

export const {
  toggleCardExpand,
  editCard,
  deleteCard,
  resetAccountCard,
  togglePwdVisible,
} = accountSlice.actions;

export default accountSlice.reducer;
