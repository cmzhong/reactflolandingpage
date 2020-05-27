import React from "react";
import { GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import Cherie from '../../images/cherie.png';
import Jordan from '../../images/jordan.png';
import Marcus from '../../images/marcus.png';
import Vaughn from '../../images/vaughn.png';

function Team() {

  const teamData = [{
    name: 'Cherie Zhong',
    image: Cherie,
    github: 'https://github.com/cmzhong',
    linkedin: 'https://www.linkedin.com/in/cheriezhong/'
  },
  {
    name: 'Jordan Deleon',
    image: Jordan,
    github: 'https://github.com/jdele',
    linkedin: 'https://www.linkedin.com/in/jordan-deleon/'
  },
  {
    name: 'Marcus Valverde',
    image: Marcus,
    github: 'https://github.com/marcusvalverde',
    linkedin: 'https://www.linkedin.com/in/marcus-valverde/'
  },
  {
    name: 'Vaughn Hartling',
    image: Vaughn,
    github: 'https://github.com/VaughnHartling',
    linkedin: 'https://www.linkedin.com/in/vaughn-hartling-3083a4133/'
  }]

  const teamProfiles = teamData.map((data) => {
    return (
      <div id="individualProfile">
        <React.Fragment key={data.name}>
          <img className="teamPhoto" src={data.image} alt={data.name} />
          <h3>{data.name}</h3>
          <div className="profileLinks">
            <a href={data.github}>
              <GoMarkGithub className="gitProfile" style={{ color: 'FFFAFA' }} size={42} />
            </a>
            <a href={data.linkedin}>
              <GrLinkedin className="linkedinProfile" style={{ color: 'FFFAFA' }} size={42} />
            </a>
          </div>
        </React.Fragment>
      </div>
    )
  })


  return (
    <section id="team">
      <h1 id="teamHeader">Team</h1>
      <div className="teamProfiles">
        {teamProfiles}
      </div>
    </section>
  )
}

export default Team;