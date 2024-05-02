import { useForm } from "../../../hooks/useForm";
import {
  ConfirmButton,
  CancelButton,
  Form,
  Input,
  Label,
} from "./edit-profile-form.styles";

const EditProfileForm = ({ user, setIsEditView }) => {
  const onSubmitCallback = async (formValues) => {
    try {
      // const result = await userService.updateUser(formValues._id, formValues);
      console.log(formValues);
      setIsEditView(false);
    } catch (error) {
      console.error(error);
    }
  };

  const { formValues, onChangeHandler, onSubmit, resetFormValues } = useForm(
    user,
    onSubmitCallback
  );

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="firstName">First Name:</Label>
      <Input
        type="text"
        name="firstName"
        value={formValues.firstName}
        onChange={onChangeHandler}
      />
      <Label htmlFor="lastName">Last Name:</Label>
      <Input
        type="text"
        name="lastName"
        value={formValues.lastName}
        onChange={onChangeHandler}
      />
      <Label htmlFor="bio">Bio:</Label>
      <Input
        type="text"
        name="bio"
        value={formValues.bio}
        onChange={onChangeHandler}
      />
      <Label htmlFor="profilePicture">Profile Picture:</Label>
      <Input
        type="text"
        name="profilePicture"
        value={formValues.profilePicture}
        onChange={onChangeHandler}
      />
      <ConfirmButton type="submit">Confirm</ConfirmButton>
      <CancelButton type="button" onClick={resetFormValues}>
        Reset form
      </CancelButton>
      <CancelButton type="button" onClick={() => setIsEditView(false)}>
        Cancel
      </CancelButton>
    </Form>
  );
};

export default EditProfileForm;
