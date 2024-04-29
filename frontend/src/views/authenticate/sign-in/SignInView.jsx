import { useUserContext } from "../../../contexts/UserContext";
import { useForm } from "../../../hooks/useForm";
import SignInForm from "../../../components/forms/authentication/SignInForm";

const SignInView = () => {
  const { onSignIn } = useUserContext();

  const { formValues, onChangeHandler, onSubmit, resetFormValues } = useForm(
    {
      email: "",
      password: "",
    },
    onSignIn
  );

  return (
    <SignInForm
      formValues={formValues}
      changeHandler={onChangeHandler}
      submitCallback={onSubmit}
      resetFormValues={resetFormValues}
    />
  );
};

export default SignInView;
