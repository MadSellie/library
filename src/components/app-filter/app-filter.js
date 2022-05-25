import './app-filter.css';

const AppFilter = (props) => {
    const btnData = [
        {author: 'all', label: "Все книги"},
        {author: 'like', label: "Любимые книги"},
        {author: 'authorName', label: "Авторы"}
    ];

    const buttons = btnData.map(({author, label}) => {
        const active = props.filter === author;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={author}
                    onClick={() => props.onToggleFilter(author)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;