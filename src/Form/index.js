import "./style.css";

const Form = () => (
    <form className="form">
        <input
            className="form__item form__item--input"
            placeholder="Co jest do zrobienia?"
        />
        <button className="form__item form__item--button">Dodaj zadanie</button>
    </form>
);

export default Form;