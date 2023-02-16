import { useState } from "react";

const useToDo = () => {
  const [edit, setEdit] = useState(null);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [category, setCategory] = useState("");

  const handleEdit = (id, title, description) => () => {
    setEdit(id);
    setTitleValue(title);
    setDescriptionValue(description);
  };

  const handleSave = (id, toDo, setToDo) => () => {
    const newToDo = [...toDo].map((item) => {
      if (item.id === id) {
        item.title = titleValue;
        item.description = descriptionValue;
      }
      return item;
    });
    setToDo(newToDo);
    setEdit(null);
  };

  const handleDelete = (id, toDo, setToDo) => () => {
    const newToDo = [...toDo].filter((item) => item.id !== id);
    setToDo(newToDo);
  };

  const handleStatus = (id, toDo, setToDo) => () => {
    const newToDo = [...toDo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setToDo(newToDo);
  };

  const handleTitleChange = ({ target: { value } }) => {
    setTitleValue(value);
  };

  const handleDescriptionChange = ({ target: { value } }) => {
    setDescriptionValue(value);
  };

  const handleCategoryChange = ({ target: { value } }) => {
    setCategory(value);
  };

  const clearTitleValue = () => {
    setTitleValue("");
  };

  const clearDescriptionValue = () => {
    setDescriptionValue("");
  };

  return {
    edit,
    titleValue,
    setTitleValue,
    descriptionValue,
    setDescriptionValue,
    category,
    setCategory,
    handleEdit,
    handleSave,
    handleStatus,
    handleDelete,
    handleCategoryChange,
    handleTitleChange,
    handleDescriptionChange,
    clearTitleValue,
    clearDescriptionValue,
  };
};

export default useToDo;
