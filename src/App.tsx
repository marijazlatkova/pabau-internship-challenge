import { FindPathAndLetters } from './components/FindPathAndLetters';

const App = () => {
  const matrix: string[] = [
    '>---A-@-+',
    '        |',
    '+-U-+   C',
    '|   |   |',
    's   C---+',
  ];

  return (
    <div>
      <FindPathAndLetters matrix={matrix} />
    </div>
  );
};

export default App;