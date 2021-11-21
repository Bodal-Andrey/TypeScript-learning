import React from 'react';
import './App.css';

// type CounterState = {
//   count: number,
// };

// type CounterProps = {
//   readonly title?: string,
// };

// class Counter extends React.Component<CounterProps, CounterState> {
//   state = {
//     count: 0,
//   }

//   static defaultProps: CounterProps = {
//     title: "Default counter: ",
//   }

//   handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(`${evt.clientX}, ${evt.clientY}`)
//     this.setState(({count}) => ({
//       count: ++count,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}{this.state.count}</h1>
//         <button onClick={this.handleClick}>+1</button>
//       </div>
//     );
//   }
// };

class Form extends React.Component<{}, {}> {
  handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    console.log(evt.currentTarget);
  }

  handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('Submitted!');
  }

  handleCopy = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('Copied!');
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <label>
          Simple text:
          <input
            type="text"
            name="text"
            onFocus={this.handleFocus}
            onCopy={this.handleCopy}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    )
  }
}

const App: React.FC = () => <Form />

export default App;
