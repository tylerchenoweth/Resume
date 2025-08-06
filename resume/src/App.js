
import Experience from './components/Experience/Experience';

import data from './data/data.json';

import './App.css';

function App() {

  var experience = data;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>

      <main className="App-main">
        <h1>Experience</h1>
        
        
        {experience.map((exp, index) => (
          <div className="ExperienceBlock" key={index}>
            <Experience json_payload={exp} />
          </div>
        ))}
        

        {/* <Experience /> */}
      </main>

      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
