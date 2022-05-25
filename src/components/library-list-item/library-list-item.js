import './library-list-item.css';

const LibraryListItem = (props) => {
    const {author, name, onDelete, onToggleProp, like} = props;

    let classNames = "list-group-item d-flex justify-content-between ";
    if (like) {
        classNames += ' increase like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{author}</span>
            <input type="text" className="list-group-item-input" defaultValue={name}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="like">
                    <i className="fas fa-cookie"/>
                </button>
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-star"/>
            </div>
        </li>
    )
}

export default LibraryListItem;