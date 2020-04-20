import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-easy-icon';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Hamburger} from '../../assets/icons';
import {TitleText, MediumText} from '../constants/Text';

const Home = ({navigation}) => {
  const [cases, setCases] = useState(null);
  const [openSheet, setOpenSheet] = useState(false);
  const bottomSheet = useRef(null);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(temp => temp.json())
      .then(data => setCases(data.Global));
  }, []);
  return (
    <Container>
      <SmallVirus>
        <Source
          source={require('../../assets/images/virus-small.png')}
          resizeMode="cover"
        />
      </SmallVirus>
      <LargeVirus>
        <Source
          source={require('../../assets/images/virus.png')}
          resizeMode="cover"
        />
      </LargeVirus>
      <Header>
        <HamBtn activeOpacity={0.9} onPress={() => navigation.toggleDrawer()}>
          <Hamburger width={20.13} height={12.95} />
        </HamBtn>
      </Header>
      <Wrapper>
        <TitleWrapper>
          <TitleText text="Global" color="#10242C" />
          <BottomSheetBtn
            activeOpacity={0.9}
            onPress={() => bottomSheet.current.open()}>
            {openSheet ? (
              <Icon
                type="ionicon"
                name="ios-arrow-dropup-circle"
                color="#FF8A23"
                size={21}
              />
            ) : (
              <Icon
                type="ionicon"
                name="ios-arrow-dropdown"
                color="#FF8A23"
                size={21}
              />
            )}
          </BottomSheetBtn>
        </TitleWrapper>
        <MediumText text="Total Cases of CoronaVirus" color="#DF3030" />
        <SelectWrapper>
          <Select>
            <Circle color="#FFA846" />
            <SelectText>Total Cases</SelectText>
            <Icon
              type="ionicon"
              name="ios-arrow-down"
              color="#10242C"
              size={16}
            />
          </Select>
          <Select>
            <Circle color="#FF5858" />
            <SelectText>Total Deaths</SelectText>
            <Icon
              type="ionicon"
              name="ios-arrow-down"
              color="#10242C"
              size={16}
            />
          </Select>
        </SelectWrapper>
      </Wrapper>

      {cases && (
        <Summary>
          <Cards>
            <Card>
              <Total>{cases.TotalConfirmed.toLocaleString()}</Total>
              <CardText>Total Cases</CardText>
            </Card>
            <Card>
              <Total>+{cases.NewConfirmed.toLocaleString()}</Total>
              <CardText>Today</CardText>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <Total>{cases.TotalDeaths.toLocaleString()}</Total>
              <CardText>Deaths</CardText>
            </Card>
            <Card>
              <Total>+{cases.NewDeaths.toLocaleString()}</Total>
              <CardText>Deaths Today</CardText>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <Total>{cases.TotalRecovered.toLocaleString()}</Total>
              <CardText>Recoveries</CardText>
            </Card>
            <Card>
              <Total>+{cases.NewRecovered.toLocaleString()}</Total>
              <CardText>Recoveries Today</CardText>
            </Card>
          </Cards>
        </Summary>
      )}

      <RBSheet
        ref={bottomSheet}
        height={668}
        animationType="slide"
        closeOnDragDown={true}
        onOpen={() => setOpenSheet(true)}
        onClose={() => setOpenSheet(false)}
        duration={250}
        customStyles={{
          wrapper: {},
          container: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 25,
          },
          draggableIcon: {
            backgroundColor: 'rgba(203,203,203.0.36)',
            width: 81,
            marginVertical: 20,
          },
        }}>
        <SheetTitle>Corona Affected Countries</SheetTitle>
      </RBSheet>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #fff;
  padding-top: 100px;
`;
const SmallVirus = styled.View`
  width: 179px;
  height: 101px;
  position: absolute;
  top: -10px;
  align-self: center;
  z-index: 10;
`;
const LargeVirus = styled.View`
  width: 479px;
  height: 270px;
  position: absolute;
  right: -195px;
  top: -90px;
  z-index: 50;
`;
const Source = styled.Image`
  width: 100%;
  height: 100%;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
`;
const HamBtn = styled.TouchableOpacity``;
const Wrapper = styled.View`
  padding-left: 20px;
  margin-top: 25px;
  flex: 3;
`;
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const BottomSheetBtn = styled.TouchableOpacity`
  padding: 10px;
`;
const SelectWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-right: 30px;
`;
const Select = styled.TouchableOpacity`
  background: #f5f5f5;
  border-radius: 7px;
  width: 151px;
  height: 34px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 6px;
  background: ${props => props.color};
  margin-right: 8px;
`;
const SelectText = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 13px;
  color: #10242c;
  margin-right: 18px;
`;

const Summary = styled.View`
  background: #fff6ec;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  width: 100%;
  flex: 2.5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const Cards = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
const Card = styled.View`
  background: #fff;
  border-radius: 9px;
  padding: 20px;
  margin: 0px 10px;
  width: 180px;
  height: 76px;
`;
const Total = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 26px;
  color: #10242c;
`;
const CardText = styled.Text`
  font-family: 'IBMPlexSans';
  font-size: 13px;
  color: #ff8a23;
`;
const SheetTitle = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 15px;
  color: #333333;
`;
export default Home;
