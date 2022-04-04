import React from 'react'
import SkillsList from '../../components/elements/skillsList/skillsList'

const Skills = (props) => {
    console.log("skills page props", props.skills.data.codingDv.data.attributes.skills)
    return (
        <div className="min-h-screen bg-white">
            <nav>
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold text-center">Skills</h1>
                </div>

            </nav>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                   <SkillsList skills={ props.skills.data.codingDv.data.attributes.skills} />  
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

