import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

type PortalProps = {
  children: React.ReactNode,
}

class Portal extends React.Component<PortalProps> {
  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

// class MyComponent extends React.Component<{}, { count: number }> {
//   state = {
//     count: 0,
//   }

//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: ++count,
//     }));
//   }

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//         <h1>Clicks: {this.state.count}</h1>
//         <Portal>
//           <h2>TEST PORTAL</h2>
//           <button>Click</button>
//         </Portal>
//       </div>
//     );
//   }
// }

interface IContext {
  isAuth: Boolean,
  toggleAuth: () => void,  
};

const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {}
});

class Login extends React.Component {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { isAuth, toggleAuth } = this.context;

    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}

const Profile: React.FC = (): React.ReactElement => (
  <AuthContext.Consumer>
    {({ isAuth }: IContext) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

class Context extends React.Component<{}, { isAuth: Boolean }> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth,
    }));
  };

  render() {
    const { isAuth } = this.state;
    const context: IContext = {isAuth, toggleAuth: this.toggleAuth};

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

const App: React.FC = () => <Context />

export default App;
