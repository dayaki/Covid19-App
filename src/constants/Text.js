import React from 'react';
import styled from 'styled-components/native';

export const TitleText = ({text, color, style}) => (
  <TextTitle color={color}>{text}</TextTitle>
);
export const MediumText = ({text, color, style}) => (
  <TextMedium color={color}>{text}</TextMedium>
);

const TextMedium = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 16px;
  color: ${props => props.color};
`;
const TextTitle = styled.Text`
  font-family: 'IBMPlexSans-Medium';
  font-size: 30px;
  color: ${props => props.color};
`;
