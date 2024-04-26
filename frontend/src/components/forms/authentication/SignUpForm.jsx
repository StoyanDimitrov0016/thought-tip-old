import AuthWithGoogleButton from "./AuthWithGoogleButton";
import {
  Button,
  ClearButton,
  FieldSet,
  Form,
  Input,
  Label,
  Legend,
} from "../form-components.styles";
import SignInUpLink from "./SignInUpLink";

const SignUpForm = ({
  formValues,
  changeHandler,
  submitCallback,
  resetFormValues,
}) => {
  return (
    <div>
      <Form onSubmit={submitCallback}>
        <FieldSet>
          <Legend>Sign Up</Legend>

          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            required
            minLength="2"
            maxLength="20"
            value={formValues.firstName}
            onChange={changeHandler}
          />

          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            required
            minLength="2"
            maxLength="20"
            value={formValues.lastName}
            onChange={changeHandler}
          />

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

          <Label htmlFor="repass">Confirm Password:</Label>
          <Input
            type="password"
            name="repass"
            id="repass"
            required
            minLength="6"
            maxLength="128"
            value={formValues.repass}
            onChange={changeHandler}
          />

          <Button type="submit">Submit</Button>
          <ClearButton type="button" onClick={resetFormValues}>
            Clear
          </ClearButton>
        </FieldSet>
      </Form>

      <AuthWithGoogleButton isSignUp={true} />
      <SignInUpLink isSignUp={true} />
    </div>
  );
};

export default SignUpForm;
