import {MdDelete} from 'react-icons/md'
import './index.css'

const ListItem = props => {
  const {details, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = details
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div>
          <img src={imageUrl} className="li-img" alt="track"/>
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <p>{duration}</p>
      <button type="button" onClick={onDelete} data-testid="delete">
        <MdDelete />
      </button>
    </li>
  )
}

export default ListItem
