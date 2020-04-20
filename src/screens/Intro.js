import React from 'react';
import styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colors} from '../constants/colors';
// import {wp, hp} from '../constants/utils';

const Intro = () => {
  const slides = [
    {
      key: '1',
      title: 'How to Protect yourself &\nothers form Coronavirus \n(2019-nCoV)',
      header: 'Wash your hands',
      nos: '01',
      icon: require('../../assets/images/wash-hand.png'),
      text:
        'Wash your hands regulary with\n soap and water or alcohol-based \nhandrub',
    },
    {
      key: '2',
      title: 'How to Protect yourself &\nothers form Coronavirus \n(2019-nCoV)',
      header: 'Use face mask',
      nos: '02',
      icon: require('../../assets/images/face-mask.png'),
      text:
        'Cough or sneeze into a tissue or\n flexed elbow, then throw the \ntissue in the trash.',
    },
    {
      key: '3',
      title: 'How to Protect yourself &\nothers form Coronavirus \n(2019-nCoV)',
      header: 'Avoid touching your face',
      nos: '03',
      icon: require('../../assets/images/cover-face.png'),
      text: 'Avoid touching your nose,\n eyes and mouth with unclean\n hands',
    },
  ];

  const renderPagination = activeIndex => {
    return (
      <Pagination>
        <Dots>
          {slides.length > 1 &&
            slides.map((_, i) => (
              <Dot key={i} active={i === activeIndex ? true : false} />
            ))}
        </Dots>
      </Pagination>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Slider>
        <Title>{item.title}</Title>
        <ImageWrapper>
          <Image source={item.icon} resizeMode="cover" />
        </ImageWrapper>
        <NumberText>{item.nos}</NumberText>
        <SubTitle>{item.header}</SubTitle>
        <Text>{item.text}</Text>
      </Slider>
    );
  };

  return (
    <Container>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderPagination={renderPagination}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: #fffaf4;
  flex: 1;
  padding: 30px;
`;
const Slider = styled.View`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  align-items: center;
`;
const Title = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 18px;
  text-align: center;
  color: ${colors.primary};
`;
const ImageWrapper = styled.View`
  width: 375px;
  height: 260.43px;
  margin-top: 70px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const NumberText = styled.Text`
  color: ${colors.red};
  font-family: 'IBMPlexSans';
  font-size: 50px;
  margin-top: 25px;
`;
const SubTitle = styled.Text`
  color: ${colors.primary};
  font-family: 'IBMPlexSans-Medium';
  font-size: 26px;
  margin: 20px 0px;
`;
const Text = styled.Text`
  color: ${colors.primary};
  font-family: 'IBMPlexSans';
  font-size: 17px;
  text-align: center;
  line-height: 22px;
`;
const Pagination = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Dots = styled.View`
  width: 31px;
  height: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Dot = styled.View`
  width: 31px;
  height: 6px;
  border-radius: 58px;
  margin: 0px 4px;
  background-color: ${props => (props.active ? colors.orange : colors.gray)};
`;

export default Intro;
