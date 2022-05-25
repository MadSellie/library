import LibraryListItem from "../library-list-item/library-list-item";
import './library-list.css';

const LibraryList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <LibraryListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default LibraryList;