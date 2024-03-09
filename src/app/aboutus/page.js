// pages/aboutus/page.js

import { details } from '../data/data';

export default function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {details.map(member => (
          <li key={member.id}>
            <a href={`/aboutus/${member.id}`}>{member.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
