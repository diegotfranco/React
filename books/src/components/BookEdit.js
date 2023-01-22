import { useState } from "react";

function BookEdit({book, onSubmit}) {
	
	const [title, setTitle] = useState(book.title);

	const onChange = (evt) => {
		setTitle(evt.target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit(book.id, title);
	};
	
	return <form onSubmit={handleSubmit}>
		<label >Titulo</label>
		<input className="input" value={title} onChange={onChange}/>
		<button className="button is-primary">
			Salvar
		</button>
	</form>;	
}

export default BookEdit;