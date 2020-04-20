import React from 'react';
import styled from 'styled-components/native';
// import Logo from '../../assets/logo.svg';

const Landing = () => {
  return (
    <Container>
      <VirusImage>
        <Source
          source={require('../../assets/images/virus-bg.png')}
          resizeMode="cover"
        />
      </VirusImage>

      <Logo
        source={require('../../assets/images/logo.png')}
        width="160"
        height="56"
      />
      <Intro>Stay updated & Stay Safe</Intro>
      <SigninWrapper>
        <SignInHeader>Signin with</SignInHeader>
        <Buttons>
          <Button activeOpacity={0.9}>
            <ButtonText>Facebook</ButtonText>
          </Button>
          <Button activeOpacity={0.9}>
            <ButtonText>Google</ButtonText>
          </Button>
        </Buttons>
        <SignInText>
          Don't worry! we will not post anything without your permission
        </SignInText>
      </SigninWrapper>
      <Btn activeOpacity={0.8}>
        <BtnText>Continue as a Guest</BtnText>
      </Btn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #df3030;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 100px;
`;
const VirusImage = styled.View`
  width: 375px;
  height: 812px;
  position: absolute;
  top: -1%;
  right: -1%;
`;
const Source = styled.Image`
  width: 100%;
  height: 100%;
`;
const Logo = styled.Image``;
const Intro = styled.Text`
  color: #fff;
  font-family: 'IBMPlexSans-Medium';
  font-size: 16px;
  margin-top: 5px;
  text-transform: capitalize;
`;
const SigninWrapper = styled.View`
  margin-top: 30px;
`;
const SignInHeader = styled.Text`
  color: #fff8f9;
  font-family: 'IBMPlexSans';
  font-size: 15px;
  text-align: center;
`;
const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 45px;
`;
const Button = styled.TouchableOpacity`
  background: #fff;
  width: 151px;
  height: 41px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const ButtonText = styled.Text`
  font-family: 'IBMPlexSans';
  font-size: 14px;
`;
const SignInText = styled(SignInHeader)`
  font-size: 12px;
  padding: 0px 100px;
  text-align: center;
  line-height: 16px;
`;
const Btn = styled.TouchableOpacity`
  background: transparent;
  border-bottom-color: #ff7d54;
  border-bottom-width: 2px;
  padding: 0px 3px;
  padding-bottom: 5px;
  margin-top: 60px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-family: 'IBMPlexSans-Medium';
  font-size: 13px;
`;

export default Landing;
