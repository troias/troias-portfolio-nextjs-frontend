
    const Portfolio = (props) => {

      console.log("portfolio props", props)
      const {projects} = props.portfolioData

      const projectsList = projects.map((project, index) => {
        // const {project: {data: {attributes: {name,  body,  skill_categories}}}} = project
        const {name, body, skill_categories} = project.project.data.attributes
        console.log("project", skill_categories.data)
        const skillName = skill_categories.data.map((skill, index) => {
          return skill.attributes.name
        })

        return (
          <div className="item-wrap">
           {/* <a href={projects.url} title={name}> */}
             {/* <img alt={projects.title} src={projectImage} /> */}
             <div className="overlay">
                <div className="portfolio-item-meta">
               <h5>{name}</h5>
                   <p>{skillName}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          {/* </a>  */}
        </div>
  
        )
      })


    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                 {projectsList} 
            </div>
          </div>
      </div>
   </section>
    );
  }


export default Portfolio;