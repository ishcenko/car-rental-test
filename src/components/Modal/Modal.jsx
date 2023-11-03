import Button from 'components/Button/Button';
import Close from '../../image/HomeImg/close-icon.svg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {
  Wrapper,
  CloseModal,
  Icon,
  Wrapp,
  ImageCar,
  TextWrap,
  Title,
  Span,
  List,
  Item,
  Description,
  Info,
  ConditionList,
  ConditionItem,
  ConditionSpan,
} from './Modal.styled';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  maxHeight: 830,
  borderRadius: 6,
  boxShadow: 24,
};
export default function ModalCar({ open, onClose, data }) {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Wrapper>
            <CloseModal>
              <Icon src={Close} alt="Close modal" />
            </CloseModal>
            <ImageCar src={data.imd} alt={data.make} width="461" height="248" />
            <Wrapp>
              <TextWrap>
                <Title>
                  {data.make} <Span>{data.model}, </Span>
                  {data.year}
                </Title>
              </TextWrap>
              <List>
                <Item>{data.address.split(',')[1]}</Item>
                <Item>{data.address.split(',')[2]}</Item>
                <Item>Id: </Item>
                <Item>Year: {data.year}</Item>
                <Item>Type: {data.type}</Item>
              </List>
              <List>
                <Item>Fuel Consumption: {data.fuelConsumption}</Item>
                <Item>Engine Size: {data.engineSize}</Item>
              </List>
              <Description>{data.description}</Description>
              <Info>Accessories and functionalities:</Info>
              <List>
                {data.accessories.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <List>
                {data.functionalities.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </List>
              <Info>Rental Conditions:</Info>
              <ConditionList>
                <ConditionItem>
                  Minimum age:{' '}
                  <ConditionSpan>
                    {new Date().getFullYear() - data.year}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[1]}
                </ConditionItem>
                <ConditionItem>
                  {data.rentalConditions.split('\n')[2]}
                </ConditionItem>
                <ConditionItem>
                  Mileage:{' '}
                  <ConditionSpan>
                    {data.mileage.toLocaleString('en-US')}
                  </ConditionSpan>
                </ConditionItem>
                <ConditionItem>
                  Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                </ConditionItem>
              </ConditionList>
            </Wrapp>
            <Button
              text="Rental car"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            />
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
