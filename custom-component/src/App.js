import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <section className="box">
        <div className="box-title">Toggle</div>
        <Toggle />
      </section>

      <section className="box">
        <div className="box-title">Modal</div>
        <Modal />
      </section>

      <section className="box">
        <div className="box-title">Tab</div>
        <Tab />
      </section>

      <section className="box">
        <div className="box-title">Tag</div>
        <Tag />
      </section>

      <section className="box">
        <div className="box-title">AutoComplete</div>
        <AutoComplete />
      </section>

      <section className="box">
        <div className="box-title">ClickToEdit</div>
        <ClickToEdit />
      </section>
    </div>
  );
}

export default App;
