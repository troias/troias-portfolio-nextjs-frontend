import React from 'react'
import SkillsList from '../../components/elements/skillsList/skillsList'
import PortfolioNav from '../../components/page-components/portfolioNav'

const Skills = (props) => {
  console.log("skills page props", props.skills.data.codingDv.data.attributes.skills)
  return (
    <div className="min-h-screen bg-white">
      <PortfolioNav />

      <div className="flex-col justify-center">

        <div className="flex flex-col items-center pt-8 pb-8 ">


          <h1 className="text-black text-5xl font-bold  pr-8 pt-8">
             <span className="text-blue-500">Skills</span>
          </h1>
       

        </div>

        <div className="flex flex-wrap justify-center pb-12">
          <SkillsList skills={props.skills.data.codingDv.data.attributes.skills} />
        </div>
      </div>


    </div>
  )
}

export default Skills

export const getStaticProps = async () => {
  const skillsReq = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `

            fragment FileParts on UploadFileEntityResponse {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    mime
                    url
                    formats
                  }
                }
              }
              query {
                codingDv {
                  data {
                    attributes {
                      skills {
                        skill_category {
                          data {
                            attributes {
                              name 
                              slug
                              description
                              icon {
                                ...FileParts
                              }
                              project_categories {
                                data {
                                  attributes {
                                    name
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }`
    })
  })

  const skills = await skillsReq.json()


  console.log("skillPagestaticImport", skills);



  return {
    props: {
      skills: skills
    }
  }
}

