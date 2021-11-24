import React, {useState} from 'react';
import './App.css';


type InjectedProps = {
  toggleStatus: Boolean,
  toggle: () => void,
};

type BaseProps = {
  primTitle: string,
  secTitle?: string,
};

const Button = ({toggle, toggleStatus, primTitle, secTitle}: any) => (
  <button onClick={toggle}>
    {toggleStatus ? primTitle : secTitle}
  </button>
);

const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
  return (props: BaseProps) => {
    const [toggleStatus, toggle] = useState(false);

    return (
      <PassedComponent
        {...props as BaseProps}
        toggle={() => toggle(!toggleStatus)}
        toggleStatus={toggleStatus}
      />
    );
  }
};

const ToggleButton = withToggle(Button);

const App:React.FC = () => <ToggleButton primTitle="Main Title" secTitle="Additional Title" />;

export default App;
