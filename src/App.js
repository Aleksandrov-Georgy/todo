import React from 'react';
import styles from './App.module.scss';
import { addTodo } from './redux/slice/todoSlice';
import { removeTodo } from './redux/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

function App() {
  const listTodo = useSelector((state) => state.addTodo.list);

  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue('');
  };

  const doneList = () => {
    dispatch(removeTodo(value));
  };

  return (
    <div className={styles.App}>
      <h1>To Do</h1>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <ul>
        <h3>{`Ждут выполнения ${listTodo.length} задач`}</h3>
        {listTodo.map((item, index, id) => {
          return (
            <li key={index}>
              {item}
              <AiOutlineClose className={styles.closeIcon} onClick={(value) => doneList(value)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
