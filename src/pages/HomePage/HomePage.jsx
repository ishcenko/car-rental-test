import { Wrapper, Title, Text, Button } from './HomePage.styled';

// import hamer from '../image/HomeImg/hamer.jpg';
// import hamer2xhome from '../image/HomeImg/hamer2xhome.jpg';
// import hamer3xhome from '../image/HomeImg/hamer3xhome.jpg';
// import hamer4xhome from '../image/HomeImg/hamer4xhome.jpg';

export default function Home() {
  return (
    <Wrapper>
      <Title>Car rental in Kryvyi Rih</Title>
      <Text>
        Kryvyi Rih is a large administrative center of Ukraine, which is part of
        the Dnipropetrovsk region. The city of metallurgists, heavy industry,
        lush greenery and "Martian" red quarry dust. It occupies a huge area,
        the distance between the two most distant microdistricts of the city
        (Terny and Ingulets) is more than 120 kilometers, it is rightfully
        considered one of the longest settlements in Europe. In its conditions,
        the topic of car rental is very relevant for residents and guests of the
        city. Not everyone who lives in Kryvyi Rih or periodically comes here
        for work or personal business finds it beneficial to have a personal car
        and use their own vehicle for business purposes. City roads still leave
        much to be desired. Plus, it's not a secret for anyone that owning a car
        involves the constant bearing of considerable costs related to scheduled
        maintenance, repairs, insurance, and car safety. Often, it is much more
        efficient to rent a car on a daily, weekly or even monthly basis and not
        think about exorbitant costs directly related to the content of the car.
        Every year, a larger part of the country's population, including
        residents of the city of metallurgists, is thinking about this topic. If
        you also do not want to be permanently tied to a car, for personal or
        work purposes you plan to rent a car in Kryvyi Rih, study the
        possibilities and conditions of cooperation from the transport company
        "CAR-RENT". We will help you to arrange a daily or long-term car rental
        with or without a driver in Kryvyi Rih on the best terms for comfortable
        movement around the city and its surroundings.
      </Text>
      {/* <Image>
        <img
          src={hamer} // Виберіть відповідну версію фото
          srcSet={`${hamer} 1x, ${hamer2xhome} 2x, ${hamer3xhome} 3x, ${hamer4xhome} 4x`}
          alt="Car Rental"
        />
      </Image> */}
      <Button to={'/catalog'}>go to catalog</Button>
    </Wrapper>
  );
}
