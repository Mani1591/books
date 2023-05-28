import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }){
    const { editBooksById } = useBooksContext();

    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSubmit();
        editBooksById(book.id, title);
    }
    return (
        <div className="book-edit">
            <form onSubmit={handleSubmitForm} >
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button" >Save</button>
            </form>
        </div>
    );
}

export default BookEdit;