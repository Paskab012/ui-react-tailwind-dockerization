import Home from './components/home/Home';
import TopBar from './components/topbar/Topbar';
import { Routespage } from './Routes';


function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        {/* <Routespage /> */}
        <Home />
      </div>
      {/*  */}
    </>
  );
}

export default App;
