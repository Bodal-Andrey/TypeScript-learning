import React from 'react';
import './App.css';

type CounterState = {
  count: number,
};

type CounterProps = {
  readonly title?: string,
};

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }

  static defaultProps: CounterProps = {
    title: "Default counter: ",
  }

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    return false ? {count: 2} : null
  }
  
  componentDidMount(): void { }
  
  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true;
  }

  handleClick = () => {
    this.setState(({count}) => ({
      count: ++count,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
};

const App = () => <Counter title="Counter: " />

export default App;
