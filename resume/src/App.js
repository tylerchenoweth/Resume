
import Experience from './components/Experience/Experience';
import SkillList from './components/SkillsList/SkillList';
import LinkList from './components/Links/LinkList';
import CertList from './components/Certs/CertList';
import EducationList from './components/Education/EducationList';
import Clearance from './components/Clearance/Clearance';

import data from './data/data.json';

import './App.css';


function App() {

  var header = data['header'];
  var experience = data['experience'];
  var skills = data['skills'];
  var links = data['links'];

  var certs = data['certs'];
  var education = data['education']
  var clear = data['clearance']


  return (
    <div className="App">
      <header className="App-header">

        <div className="nameTitle">
          <div className="block"></div>
          <div className="nameTitleRight">
            <h1 className="name">{header.name}</h1>
            <h2 className="jobTitle">{header.title}</h2>
          </div>
        </div>

        <div className="leftRight">
          <div className="headerLeft">
            <h1 className="sectionTitle">Summary</h1>
            <p>{header.summary}</p>
          </div>

          <div className="headerRight">
            <h1 className="sectionTitle">Links</h1>
            <LinkList links={links} />
          </div>
        </div>
      </header>

      <main className="App-main">
        <div className="leftRight">
          <div className="mainLeft">
            <h1 className="sectionTitle">Experience</h1>
            {experience.map((exp, index) => (
              <div className="ExperienceBlock" key={index}>
                <Experience json_payload={exp} />
                <br></br>
              </div>
            ))}
          </div>
          <div className="mainRight">
            <EducationList education={education}/>
            <br></br>
            <Clearance clear={clear}/>
            <br></br>
            <CertList certs={certs}/>
            <br></br>
            <SkillList skills={skills} />

          </div>
        </div>
      </main>

      <footer className="App-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}


export default App;
