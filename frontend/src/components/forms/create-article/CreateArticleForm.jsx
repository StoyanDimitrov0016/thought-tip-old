import { categories } from "./categories";
import {
  Button,
  ClearButton,
  ContentTextarea,
  CreateArticleStyledForm,
  FieldSet,
  Input,
  Label,
  Legend,
  Option,
  Select,
  Textarea,
} from "../form-components.styles";

const CreateArticleForm = ({
  formValues,
  changeHandler,
  submitCallback,
  resetFormValues,
}) => {
  return (
    <div>
      <CreateArticleStyledForm onSubmit={submitCallback}>
        <FieldSet>
          <Legend>Share some wisdom!</Legend>

          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={changeHandler}
          />

          <Label htmlFor="thumbnail">Thumbnail url</Label>
          <Input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={formValues.thumbnail}
            onChange={changeHandler}
          />

          <Label htmlFor="preview">Preview</Label>
          <Textarea
            type="text"
            id="preview"
            name="preview"
            value={formValues.preview}
            onChange={changeHandler}
          />

          <Label htmlFor="content">Content</Label>
          <ContentTextarea
            type="text"
            id="content"
            name="content"
            value={formValues.content}
            onChange={changeHandler}
          />
        </FieldSet>

        <Select name="category" id="category">
          {categories.map((cat) => (
            <Option key={cat.id} value={cat.value}>
              {cat.title}
            </Option>
          ))}
        </Select>

        <Button type="submit">Create</Button>
        <ClearButton type="button" onClick={resetFormValues}>
          Clear content
        </ClearButton>
      </CreateArticleStyledForm>
    </div>
  );
};

export default CreateArticleForm;
