import {useState} from 'react';
import {mockCards} from '../mock';
import {ICard, ICardChild} from '../type';

export const useAccount = () => {
  const [data, setData] = useState(mockCards);
  const [activeCard, setActiveCard] = useState<ICard>();
  const [activeChild, setActiveChild] = useState<ICardChild>();

  const handleExpand = (id?: string) => {
    const activeIndx = data.findIndex(item => item.id === id);
    if (~activeIndx) {
      const activeCard = data[activeIndx];
      // map 代替 splice
      const newData = data.map(d => {
        if (d.id === id) {
          return {...d, expand: !activeCard.expand};
        }
        return d;
      });
      setData(newData);
    }
  };
  const handleEdit = (id?: string, childId?: string) => {
    const activeIndx = data.findIndex(item => item.id === id);
    if (~activeIndx) {
      const curCard = data[activeIndx];
      const curChild = curCard.children.find(c => c.id === childId);
      console.log('curChild', curChild);
    }
  };
  const handleDelete = (id?: string, childId?: string) => {
    const activeIndx = data.findIndex(item => item.id === id);
    if (~activeIndx) {
      // map 代替 splice
      const newData = data.map(d => {
        if (d.id === id) {
          return {
            ...d,
            expand: false,
            children: d.children.filter(c => c.id !== childId),
          };
        }
        return d;
      });
      setData(newData);
    }
  };

  return {
    data,
    activeCard,
    activeChild,
    setData,
    setActiveCard,
    setActiveChild,
    handleExpand,
    handleEdit,
    handleDelete,
  };
};
