import css from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <h1>THE PHONEBOOK</h1>
      </div>
    </div>
  );
};

export default Greeting;
