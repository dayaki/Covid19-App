import React from 'react';
import styled from 'styled-components/native';
import {Flag} from 'react-native-svg-flagkit';

const Country = ({id, name, active}) => {
  return (
    <Wrapper active={active}>
      <Flag id={'US'} />
      <Name>United States</Name>
    </Wrapper>
  );
};

const Wrapper = styled.View`
flex-direction: row;
align-items: center;
background: ${props => (props.active ? '#FFF8EF' : null)}
border-color: ${props => (props.active ? '#FFEDD5' : null)}
border-width: ${props => (props.active ? '1px' : '0px')}
`;
const Name = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 14px;
  color: #10242c;
  color: #df3030;
`;

export default Country;
