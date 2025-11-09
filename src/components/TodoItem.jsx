import './TodoItem.css';

const TodoItem = ({ id, idDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClinkDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={idDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClinkDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
