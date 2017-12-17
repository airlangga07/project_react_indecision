console.log("App.js is running!")

let app = {
  title: 'Indecision App',
  subTitle: 'My First React App',
  options: []
}

const onFormSubmit = (e)  => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderForm();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderForm();
}

const listItem = () => app.options.map(item => <li key={item}>{item}</li>);

const appRoot = document.getElementById('app');

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {listItem()}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderForm();