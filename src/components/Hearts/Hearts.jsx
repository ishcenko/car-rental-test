import Checkbox from '@mui/material/Checkbox';
import { HeartFill, HeartStroke, HeartWrap } from './Hearts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/slice';

export default function HeartIcon({ data }) {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);

  const isChecked =
    favoriteCars && favoriteCars.favorites
      ? favoriteCars.favorites.some(({ id }) => id === data.id)
      : false;
  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };
  return (
    <HeartWrap>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        checked={isChecked}
        onChange={handleToggleFavorite}
      />
    </HeartWrap>
  );
}
