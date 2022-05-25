import './app-info.css';

const AppInfo = ({like, books}) => {
    return (
        <div className="app-info">
            <h1>Библиотека</h1>
            <h2>Общее количество книг: {books}</h2>
            <h2>Любимые книги: {like}</h2>
        </div>
    )
}

export default AppInfo;