import { useAppDispatch, useAppSelector} from "store/hooks"

import { counterSliceActions, counterSliceSelectors } from "store/redux/counter/counterSlice"

import Button from "components/Button/Button"

import { CounterWrapper, Count, ButtonControl } from "./styles"

function Counter() {
  // Хук useAppDispatch не принимает в себя аргументы, он просто возвращает нам функцию dispatch, 
  // которая передаёт action в redux store. Потом на переданный action опускается нужный нам reducer
  const dispatch = useAppDispatch();

  // Забираем значение из redux store, затем передаём значение в нужные места в JSX,
  // таким образом подписываемся на изменения в redux store
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    // counterSliceActions.plus() - это actionCreator - функция, которая возвращает нам action
    const plusAction = counterSliceActions.plus()
    // action - это объект, состоящий из 2 ключ/значение
    // 1 - type - строка(тип экшена), по которому у нас вызывается кудьюсер. Например: "COUNTER/plus"
    //COUNTER - name слайса
    // plus - имя редьюсера
    //2 - paylod - это данные , которые вы хотите передать их компонентам в редьюсер
    console.log(plusAction)
    dispatch(plusAction)
    // Более короткая запись
    // dispatch(counterSliceActions.plus());
  }

  const onMinus = () => {
    const minusAction = counterSliceActions.minus()
    dispatch(minusAction)
    // Более короткая запись
    // dispatch(counterSliceActions.minus());
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  };

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
                    {/* здесь происходит подписка {count} */}
      <Count className="count">{count} </Count>    
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
