import {
  FieldsetStyled,
  FormStyled,
  GoogleActionButtonStyled,
  InputStyled,
  LabelStyled,
  LegendStyled,
  SubmitButtonStyled,
} from "../../styled/formStyles";

import SignInAndUpRedirectLink from "../../components/Forms/SignInAndUpRedirectLink";

const SignInView = () => {
  return (
    <>
      <FormStyled>
        <FieldsetStyled>
          <LegendStyled>Sign In</LegendStyled>
          <LabelStyled htmlFor="email">Email:</LabelStyled>
          <InputStyled type="email" name="email" id="email" />

          <LabelStyled htmlFor="password">Password:</LabelStyled>
          <InputStyled type="password" name="password" id="password" />

          <SubmitButtonStyled>Sign In</SubmitButtonStyled>
        </FieldsetStyled>
      </FormStyled>

      <GoogleActionButtonStyled>Sign In with Google</GoogleActionButtonStyled>

      <SignInAndUpRedirectLink isSignUp={false} />
    </>
  );
};

export default SignInView;
