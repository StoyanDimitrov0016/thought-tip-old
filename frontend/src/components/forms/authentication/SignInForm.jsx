import {
  Button,
  ClearButton,
  FieldSet,
  Form,
  Input,
  Label,
  Legend,
} from "../form-components.styles";
import AuthWithGoogleButton from "./AuthWithGoogleButton";
import SignInUpLink from "./SignInUpLink";

const SignInForm = ({
  formValues,
  changeHandler,
  submitCallback,
  resetFormValues,
}) => {
  return (
    <div>
      <Form onSubmit={submitCallback}>
        <FieldSet>
          <Legend>Sign In</Legend>

          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            minLength="4"
            maxLength="254"
            value={formValues.email}
            onChange={changeHandler}
          />

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            required
            minLength="6"
            maxLength="128"
            value={formValues.password}
            onChange={changeHandler}
          />

          <Button type="submit">Submit</Button>
          <ClearButton type="button" onClick={resetFormValues}>
            Clear
          </ClearButton>
        </FieldSet>
      </Form>

      <AuthWithGoogleButton isSignUp={false} />
      <SignInUpLink isSignUp={false} />
    </div>
  );
};

export default SignInForm;
