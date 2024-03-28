import {
  FormStyled,
  FieldsetStyled,
  LegendStyled,
  LabelStyled,
  InputStyled,
  SubmitButtonStyled,
  GoogleActionButtonStyled,
} from "../../styled/formStyles";

import SignInAndUpRedirectLink from "../../components/Forms/SignInAndUpRedirectLink";

const SignUpView = () => {
  return (
    <>
      <FormStyled>
        <FieldsetStyled>
          <LegendStyled>Sign Up</LegendStyled>

          <LabelStyled htmlFor="firstName">First Name:</LabelStyled>
          <InputStyled type="text" name="firstName" id="firstName" />

          <LabelStyled htmlFor="lastName">Last Name:</LabelStyled>
          <InputStyled type="text" name="lastName" id="lastName" />

          <LabelStyled htmlFor="email">Email:</LabelStyled>
          <InputStyled type="email" name="email" id="email" />

          <LabelStyled htmlFor="password">Password:</LabelStyled>
          <InputStyled type="password" name="password" id="password" />

          <LabelStyled htmlFor="repass">Confirm Password:</LabelStyled>
          <InputStyled type="password" name="repass" id="repass" />

          <SubmitButtonStyled type="submit">Sign Up</SubmitButtonStyled>
        </FieldsetStyled>
      </FormStyled>

      <GoogleActionButtonStyled as="button">Sign Up with Google</GoogleActionButtonStyled>

      <SignInAndUpRedirectLink isSignUp />
    </>
  );
};

export default SignUpView;
