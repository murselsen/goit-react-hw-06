import Css from "./App.module.css";
// Components
import Form from "./components/Form";

const App = () => {
  console.log("App component rendered");
  return (
    <div className={Css.App}>
      <h1 className={Css.Title}>Contacts</h1>
      <Form />
    </div>
  );
};

export default App;
// theme : https://colorhunt.co/palette/0000002222221dcd9f169976
