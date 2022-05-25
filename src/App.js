import {Component} from 'react';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import LibraryList from "./components/library-list/library-list";
import LibraryAddForm from "./components/library-add-form/library-add-form";
import nextId from "react-id-generator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {author: 'John', name: 'Hello,', like: false, id: nextId()},
                {author: 'Alex', name: 'World!', like: false, id: nextId()},
                {author: 'Gause', name: "I'm using React", like: false, id: nextId()},
            ],
            term: '',
            filter: 'all'
        };
    }
 
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    createElem = (author, name) => {
        const newItem = {
            author,
            name,
            like: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.author.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchFilter = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(items => items.like);
            case 'authorName':
                return items.filter(items => items.author);
            default:
                return items;
        }
    }

    onToggleFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const books = this.state.data.length;
        const like = this.state.data.filter(item => item.like).length;
        const visibleData = this.searchFilter(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo books={books} like={like}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onToggleFilter={this.onToggleFilter}/>
                </div>

                <LibraryList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}/>
                <LibraryAddForm onCreateElem={this.createElem}/>
            </div>
        );
    }
}

export default App;