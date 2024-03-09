import { useSelector } from 'react-redux';
import { deleteCard, selectTodos } from '../../modules/todoSlice';
import { useAppDispatch } from '../../store/hook';
import * as St from '../../style/BucketListStyle'

const BucketList = () => {

  const todos = useSelector(selectTodos);
  const dispatch = useAppDispatch();

  return (
    <St.ListContainer>
      {todos.map((item) => (
          <St.ContentsContainer key={item.id}>
            <St.Title>{item.title}</St.Title>
            <St.DeleteButton onClick={() => dispatch(deleteCard(item.id))}>X</St.DeleteButton>
          </St.ContentsContainer>
      ))}
    </St.ListContainer>
  )
}

export default BucketList