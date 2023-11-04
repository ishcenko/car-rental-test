// import Select from 'react-select';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import Button from 'components/Button/Button';
// import {
//   Container,
//   Form,
//   SelectContainer,
//   InputContainer,
//   Label,
//   InputLeft,
//   InputRight,
//   SpanLeft,
//   SpanRight,
// } from './Filter.styled';

// export default function Filter({ makes, price, onFilterChange }) {
//   const [selectMake, setSelectMake] = useState('');
//   const [selectPrice, setSelectPrice] = useState(null);
//   const [selectPriceLabel, setSelectPriceLabel] = useState('');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const makeOption = makes.map(make => ({ value: make, label: make }));

//   const priceOption = [];
//   for (let i = 30; i <= 500; i += 10) {
//     priceOption.push({ value: i, label: `${i}` });
//   }

//   const handlePriceStep = selectOpion => {
//     setSelectPrice(selectOpion.value);
//     setSelectPriceLabel(selectOpion.label);
//   };

//   const FilterPrice = price.filter(el => el <= selectPrice);

//   const formaRun = value => {
//     const cleanValue = value.toString().replace(/,/g, '');
//     const formatValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     return formatValue;
//   };

//   const handleMinChange = event => {
//     setMinPrice(event.target.value);
//   };
//   const handleMaxChange = event => {
//     setMaxPrice(event.target.value);
//   };
//   const handleFilterClick = () => {
//     if (
//       parseInt(minPrice.replace(/,/g, ''), 10) >
//       parseInt(maxPrice.replace(/,/g, ''), 10)
//     ) {
//       toast.error('The maximum mileage must exceed the minimum mileage.');
//       return;
//     }
//     const newFilters = {
//       make: selectMake,
//       filteredPrices: FilterPrice.map(price => ({
//         value: price,
//         label: `${price}`,
//       })),
//       minMileage: parseInt(minPrice.replace(/,/g, ''), 10),
//       maxMileage: parseInt(maxPrice.replace(/,/g, ''), 10),
//     };

//     onFilterChange(newFilters);
//   };

//   return (
//     <Container>
//       <SelectContainer>
//         <Label htmlFor="nameSelect">Car brand</Label>
//         <Select
//           id="nameSelect"
//           placeholder="Enter the text"
//           value={selectMake}
//           isClearable={true}
//           onChange={selectedOption => setSelectMake(selectedOption)}
//           options={makeOption}
//           styles={{
//             control: styles => ({
//               ...styles,
//               width: '224px',
//               height: '48px',
//               borderColor: 'rgba(18, 20, 23, 0.2)',
//               border: 'none',
//               borderRadius: '14px',
//               padding: '8px',
//               fontSize: '16px',
//               fontFamily: 'Manrope',
//               backgroundColor: 'rgba(247, 247, 251, 1)',
//               appearance: 'none',
//             }),
//             option: (styles, { isFocused }) => {
//               return {
//                 ...styles,
//                 color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
//                 fontFamily: 'Manrope',
//               };
//             },

//             placeholder: styles => ({
//               ...styles,
//               color: 'rgba(18, 20, 23, 1)',
//             }),
//           }}
//           components={{
//             IndicatorSeparator: () => null,
//           }}
//         />
//       </SelectContainer>

//       <SelectContainer>
//         <Label htmlFor="priceSelect">Price / 1 hour</Label>
//         <Select
//           id="priceSelect"
//           placeholder="To $"
//           value={
//             selectPrice ? { value: selectPrice, label: selectPriceLabel } : null
//           }
//           onChange={handlePriceStep}
//           options={priceOption}
//           styles={{
//             control: styles => ({
//               ...styles,
//               width: '125',
//               height: '48px',
//               borderColor: 'rgba(18, 20, 23, 0.2)',
//               border: 'none',
//               borderRadius: '14px',
//               padding: '8px',
//               fontSize: '16px',
//               fontFamily: 'Manrope',
//               backgroundColor: 'rgba(247, 247, 251, 1)',
//               appearance: 'none',
//             }),
//             option: (styles, { isFocused }) => {
//               return {
//                 ...styles,
//                 color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
//                 fontFamily: 'Manrope',
//               };
//             },

//             placeholder: styles => ({
//               ...styles,
//               color: 'rgba(18, 20, 23, 1)',
//             }),
//           }}
//           components={{
//             IndicatorSeparator: () => null,
//           }}
//         />
//       </SelectContainer>

//       <Form>
//         <Label>Car mileage / km</Label>
//         <InputContainer>
//           <InputLeft
//             type="text"
//             value={formaRun(minPrice)}
//             onChange={handleMinChange}
//           />
//           <SpanLeft>From</SpanLeft>
//           <InputRight
//             type="text"
//             value={formaRun(maxPrice)}
//             onChange={handleMaxChange}
//           />
//           <SpanRight>To</SpanRight>
//         </InputContainer>
//       </Form>
//       <Button text="Search" onClick={handleFilterClick} width="135px" />
//     </Container>
//   );
// }
