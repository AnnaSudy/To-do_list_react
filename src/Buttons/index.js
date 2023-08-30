import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) =>
    tasks.length > 0 && (
        <span className="section__buttons">
            <button className="section__eachButton">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>

            <button className="section__eachButton" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </span>
    );
export default Buttons;
