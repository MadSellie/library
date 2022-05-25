import {Component} from 'react';
import './library-add-form.scss';

class LibraryAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            name: ''            
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.length || !this.state.author) return;
        this.props.onCreateElem(this.state.author, this.state.name);
        this.setState({
            author: '',
            name: ''
        });
    }

    render() {
        const {author, name} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте новую книгу</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Автор"
                           name="author"
                           value={author}
                           onChange={this.onValueChange}/>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Название"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default LibraryAddForm;