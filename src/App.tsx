import { FC } from 'react';
import './App.css';
import { WorldClock } from './components/WorldClock';

const App: FC = () => {
  return (
    <div className="App">
      <WorldClock />
    </div>
  );
};

export default App;
