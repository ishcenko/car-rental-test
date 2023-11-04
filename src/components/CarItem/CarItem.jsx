import { useState } from 'react';
import Hearts from 'components/Hearts/Hearts';
import {
  Wrapper,
  ImageWrappper,
  Img,
  WrapperTitle,
  Title,
  Span,
  TextTitle,
  List,
  Item,
} from './CarItem.styled';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

export default function CarItem({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ImageWrappper>
        <Hearts data={data} />
        <Img src={data.img} alt="Photo Car" />
      </ImageWrappper>
      <WrapperTitle>
        <Title>
          {data.make} {''}
          <Span>{data.model}</Span>, {data.year}
        </Title>
        <TextTitle>{data.rentalPrice}</TextTitle>
      </WrapperTitle>
      <List>
        <Item> {data.address.split(',')[1]} </Item>
        <Item> {data.address.split(',')[2]} </Item>
        <Item> {data.rentalCompany} </Item>
        <Item> {data.type} </Item>
        <Item> {data.model} </Item>
        <Item> {data.mileage} </Item>
        <Item> {data.accessories[0]} </Item>
      </List>
      <Button onClick={handleOpen} text="Leart more" width="274px" />
      {open && <Modal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
