
import './links.css';

import LinkItem from './LinkItem';


export default function LinksList({links}) {
  return (
    <div className="headerRight">
      <h1 className="title">Links</h1>
      {links.map((link, index) => (
        <LinkItem key={index} icon={link.icon} text={link.link} />
      ))}
    </div>
  );
}
