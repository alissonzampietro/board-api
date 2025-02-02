import IBoardService from '../../domain/services/IBoardService'
import IBoardRepository from '../../domain/repositories/IBoardRepository'

interface CreateBoardRequest {
  id: string,
  title: string,
}

const CreateBoardController = (
  boardService: IBoardService,
  boardRepository: IBoardRepository,
  request: CreateBoardRequest) => {
  const board = boardService.create(request.id, request.title)
  return boardRepository.persist(board)
}

export default CreateBoardController