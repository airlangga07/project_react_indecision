class IndecisionApp extends React.Component {
  render() {
    const title = `Indecision`;
    const subTitle = `Put your life in the hands of a computer.`;
    const options = ['This', 'That', 'There', 'Then', 'Thought', 'Things'];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(op => <Option key={op} option={op} />)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));