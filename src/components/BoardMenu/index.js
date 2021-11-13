import {Wrapper }from './style'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {actions} from '../../state/club/common/club'

const BoardMenu = ({clubId}) => {
  const {boards} = useSelector(state => state.commonClub)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchSelectAllBoard({clubId}))
  },[clubId, dispatch])

  const handleBoardClick = () => {

  }
  return<Wrapper>
    <ul>
      {boards.length > 0 && boards.map((el, idx) => <li key={idx} onClick ={handleBoardClick}>{el}</li>)}  
    </ul>
  </Wrapper>
}
export default BoardMenu
