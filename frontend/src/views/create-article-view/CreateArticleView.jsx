import { useNavigate } from "react-router-dom";
import allPaths from "../../paths/allPaths";
import articleService from "../../services/articleService";
import { useForm } from "../../hooks/useForm";
import CreateArticleForm from "../../components/forms/create-article/CreateArticleForm";
import { FormContainer } from "./create-article-view.styles";

const initCreateFromValues = {
  title: "",
  thumbnail: "",
  preview: "",
  content: "",
  topic: "",
  tags: "",
};

const CreateArticleView = () => {
  // TODO: after article completion/creating redirect to user's articles in the user profile view
  const navigate = useNavigate();

  const onSubmitArticleCreation = async (formValues) => {
    try {
      const result = await articleService.createArticle(formValues);

      navigate(allPaths.userProfile.articles);
    } catch (error) {
      resetFormValues();
    }
  };

  const { formValues, onChangeHandler, onSubmit, resetFormValues } = useForm(
    initCreateFromValues,
    onSubmitArticleCreation
  );

  return (
    <FormContainer>
      <CreateArticleForm
        formValues={formValues}
        changeHandler={onChangeHandler}
        submitCallback={onSubmit}
        resetFormValues={resetFormValues}
      />
    </FormContainer>
  );
};
export default CreateArticleView;
