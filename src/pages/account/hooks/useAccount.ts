import {useAppSelector} from '@/hooks/useRdx';

export const useAccount = () => {
  const accountCard = useAppSelector(state => state.account.accountCard);
  return {
    accountCard,
    activeCard: {},
    activeChild: {},
  };
};
