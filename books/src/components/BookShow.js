import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit}) {	
	const [showEdit, setShowEdit] = useState(false);
	
	const onClickEdit = () => {
		setShowEdit(!showEdit);
	};

	const onClickDelete = () => {
		onDelete(book.id);
	};

	const onSubmit = (id, title) => {
		setShowEdit(false);
		onEdit(id, title);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit)
		content = <BookEdit onSubmit={onSubmit} book={book}/>;

	return <div className="book-show">
		<img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
			{content}
			<div className="actions">
				<button className="edit" onClick = {onClickEdit}>
					Edit
				</button>
				<button className="delete" onClick={onClickDelete}>
					Delete
				</button>
			</div>
		</div>;	
}

export default BookShow;