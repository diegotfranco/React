import { useState } from "react";

function BookCreate({ onCreate }) {

	const [title, setTitle] = useState('');
	
	const onChange = (evt) => {
		setTitle(evt.target.value)
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		onCreate(title);
		setTitle('')
	};

	return <div className="book-create">
		<h3>Adicionar um livro</h3>
		<form onSubmit={onSubmit}>
			<label>Titulo</label>
			<input className="input" value={title} onChange={onChange}/>
			<button className="button">Criar</button>
		</form>
	</div>;	
}

export default BookCreate;