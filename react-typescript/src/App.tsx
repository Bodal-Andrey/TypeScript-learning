import React from 'react';

type TitleProps = {
  title: string,
  test?: string,
};

const Title = ({ title, test = 'test' }: TitleProps) => <h1>{title}</h1>

const App = () => <Title title="test" />

export default App;
