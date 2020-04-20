import React from 'react';
import styled from 'styled-components/native';
import {Flag} from 'react-native-svg-flagkit';

const Country = ({id, name, active = false, handlePress}) => {
  return (
    <Wrapper activeOpacity={0.9} active={active} onPress={handlePress}>
      <Flag id={id} width={27.65} height={18.12} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${props => (props.active ? '#FFF8EF' : '#fff')};
  border-color: ${props => (props.active ? '#FFEDD5' : '#fff')};
  border-width: ${props => (props.active ? '1px' : '0px')};
  width: 100%;
  padding: 20px 10px 20px 45px;
  margin: 2px 0px;
`;
const Name = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 15px;
  color: #df3030;
  margin-left: 25px;
`;

export default Country;
