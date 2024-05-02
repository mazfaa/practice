import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Header';
  h1.className = 'header';

  console.log(h1);

  const element = <h1 className='header'>Header</h1>

  console.log(element);
  
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
