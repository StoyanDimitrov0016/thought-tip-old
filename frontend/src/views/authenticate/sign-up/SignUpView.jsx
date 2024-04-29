import { useUserContext } from "../../../contexts/UserContext";
import { useForm } from "../../../hooks/useForm";
import SignUpForm from "../../../components/forms/authentication/SignUpForm";

const SignUpView = () => {
  const { onSignUp } = useUserContext();

  const { formValues, onChangeHandler, onSubmit, resetFormValues } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repass: "",
    },
    onSignUp
  );

  return (
    <SignUpForm
      formValues={formValues}
      changeHandler={onChangeHandler}
      submitCallback={onSubmit}
      resetFormValues={resetFormValues}
    />
  );
};

export default SignUpView;
