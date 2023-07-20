import React from 'react';
import styles from './App.module.scss';
import { addTodo } from './redux/slice/todoSlice';
import { removeTodo } from './redux/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

function App() {
  const listTodo = useSelector((state) => state.addTodo.list);
  const listDone = useSelector((state) => state.addTodo.listDone);

  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue('');
  };

  const doneList = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className={styles.App}>
      <h1>To Do</h1>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <ul>
        <div className={styles.todoLists}>
          <div>
            <h3>{`Ждут выполнения ${listTodo.length} задач`}</h3>
            {listTodo.map((item, index) => {
              return (
                <li key={item}>
                  {item}
                  <AiOutlineClose className={styles.closeIcon} onClick={() => doneList(index)} />
                </li>
              );
            })}
          </div>
          <div>
            <h3>{`Завершено ${listDone.length} задач`}</h3>
            {listDone.map((item, index) => {
              return (
                <li key={item}>
                  {item}
                  <AiOutlineCheck className={styles.doneIcon} />
                </li>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default App;
