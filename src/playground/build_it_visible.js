console.log('app is running');

const appRoot = document.getElementById('app');

let toggleStatus = false;

const toggleButton = () => {
  toggleStatus = (toggleStatus) ? false : true;
  // toggleStatus = !toggleStatus; <-- this should be used!
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleButton}>{toggleStatus ? 'Hide Details' : 'Show Details'}</button>
      {toggleStatus && <p>Hello! this is the secret message!</p>}
    </div>
  )

  ReactDOM.render(template, appRoot);
}

render();
