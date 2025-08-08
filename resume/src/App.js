
import Experience from './components/Experience/Experience';
import SkillList from './components/SkillsList/SkillList';

import data from './data/data.json';

import './App.css';
import ColorPalette from './components/ColorPalette/ColorPalette';

function App() {

  var header = data['header'];
  var experience = data['experience'];
  var skills = data['skills']

  return (
    <div className="App">
      <header className="App-header">
        <h1>{header.name}</h1>

        <div className="leftRight">
          <div className="headerLeft">
            

            <p>{header.email}</p>
            <p>{header.website}</p>
            <p>{header.location}</p>

            <div className="logoLinkCombo">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
                0-.19-.007-.693-.01-1.36-2.01.37-2.43-.97-2.43-.97-.36-.92-.88-1.17-.88-1.17
                -.72-.49.055-.48.055-.48.8.056 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66
                .07-.52.28-.87.5-1.07-1.6-.18-3.28-.8-3.28-3.56 
                0-.79.28-1.43.74-1.93-.075-.18-.32-.91.07-1.9 
                0 0 .6-.19 1.95.74A6.8 6.8 0 018 4.71c.61.003 
                1.22.083 1.79.24 1.35-.93 1.95-.74 1.95-.74.39.99.14 
                1.72.07 1.9.46.5.74 1.14.74 1.93 
                0 2.77-1.68 3.38-3.29 3.56.28.25.53.73.53 1.48 
                0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 
                8.001 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <p className="logoLinkCombo">{header.github}</p>
            </div>
          </div>
          <div className="headerRight">
            <p>{header.summary}</p>
          </div>
        </div>
      </header>

      

      <main className="App-main">
        {/* <ColorPalette /> */}
        
        

        <div className="leftRight">
          
          <div className="mainLeft">
            <h1 className="title">Experience</h1>
            {experience.map((exp, index) => (
              <div className="ExperienceBlock" key={index}>
                <Experience json_payload={exp} />
                <br></br>
              </div>
            ))}
          </div>
          <div className="mainRight">
            {skills.map((list, index) => (
              <div className="SkillBlock" key={index}>
                <SkillList json_payload={list} />
                <br></br>
              </div>
            ))}
          </div>
        </div>
        

        {/* <Experience /> */}
      </main>

      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
