import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { WrapperHearts, ColorHearts, HeartsStroke } from './Hearts.styled';
import { addFavorit, removeFavorit } from 'redux/slice';
import { selectorFavorit } from 'redux/selectors';

export default function Hearts({ data }) {
  const dispatch = useDispatch();
  const favoritCars = useSelector(selectorFavorit);
  const isChecked = favoritCars.favorit.some(({ id }) => id === data.id);
  const handleToggeleFavorit = () => {
    if (isChecked) {
      dispatch(removeFavorit(data));
    } else {
      dispatch(addFavorit(data));
    }
  };

  return (
    <WrapperHearts>
      <Checkbox
        icon={<HeartsStroke />}
        checkedIcon={<ColorHearts />}
        onChange={handleToggeleFavorit}
      />
    </WrapperHearts>
  );
}
