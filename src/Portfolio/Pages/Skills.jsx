import './Skills.css'
export default function Skills(){

 

    const skills=[
      {name:'React',desc:'Building dynamic user interfaces and reusable components.'},
      {name:'JavaScript',desc:'Creating interactive web elements and client-side functionality.'},
      {name:'Java',desc:'Developing robust backend systems and applications.'},
      {name:'CSS',desc:'Designing responsive layouts and enhancing visual appeal.'},
      {name:'HTML',desc:'Structuring web content for accessibility and SEO.'},
      
      
    ];

    return (
      <section className="skills-section">
        <h2 className="skills-heading">My Skills</h2>
        <p className="skills-subtext">Here are the technologies I work with.</p>


        <div className="skills-grid">
          {skills.map((skill,index)=>(
            <div className="skill-card" key={index}>
               {skill.name === 'React' && <i className="fab fa-react icon-react"></i>}
               {skill.name === 'JavaScript' && <i className="fab fa-js icon-js"></i>}
               {skill.name === 'CSS' && <i className="fab fa-css3-alt icon-java"></i>}
               {skill.name === 'HTML' && <i className="fab fa-html5 icon-css"></i>}
               {skill.name === 'Java' && <i className="fab fa-java icon-html"></i>}
               <h3>{skill.name}</h3>
               <p>{skill.desc}</p>
              </div>
          ))}
        </div>

        
        </section>
    )
}