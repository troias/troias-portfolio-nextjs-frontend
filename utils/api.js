export const getFooter = async () => {

  const getFooterData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({
      query: `
      query {
        codingDv {
          data {
            attributes {
              footer {
                footer_social_links {
                  newTab
                  text
                  url
                }
              }
            }
          }
        }
      }
      `
    }),


  })  
  const footerData = await getFooterData.json()

  // console.log("apiFooter", footerData);
  return footerData

}


export const getAboutSection = async () => {
  const getAboutSectionData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
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
                   about {
                      title
                      bio
                   }
               
                  contactDetails {
                    iconImage {
                      ...FileParts
                    }
                    title
                    cv
                    contactDetailItem {
                      title
                      text
                   }
                  }

                }
             }
           }
        }

       

       `
    })




  })

  const res = await getAboutSectionData.json()
  return res
}

export const getHeaderDetails = async () => {
  const getHeaderDetailsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `  

       query {
        codingDv {
         data {
            attributes {
               about {
                  title
                  bio
               }
               header_social_links {
                url
                text
                newTab
              }
              contactDetails {
                currentEmployment      
                jobTitle
                location
              }

            }
         }
       }
}
        

       

       `
    })
  }
  )
  const res = await getHeaderDetailsData.json()
  return res
}

export const getResumeData = async () => {
  const getResumeData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
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

        qualifications {
         data {
           attributes {
        
             name 
             completed
             institution
             distinction
           }
         }
       }
      
     jobs {
      data {
        attributes {
          title
          duration
          body
          company
          location
          
        }
      }
    }

    skillCategories {
      data {
        attributes {
          featured
          name
          description
          slug
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




       

       `
    })
  }
  )
  const res = await getResumeData.json()
  return res
}

export const getProjectsData = async () => {

  const getProjectsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `
      fragment CollectionParts on UploadFileRelationResponseCollection {
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
        projects {
          data {
            attributes {
              name
              body
              link {
                newTab
                url
                text
              }
              slug
              featured
              cover {
                ...FileParts
              }
              images {
                ...CollectionParts
              }
              skill_categories {
                data {
                  attributes {
                    name
                    icon {
                      ...FileParts
                    }
                  }
                }
              }
              
            }
          }
        }
      }
      `
    })
  })
  const res = await getProjectsData.json()
  return res
}

export const getAllSkills = async () => {
  const getAllSkillsData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
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
        skillCategories {
          data {
            attributes {
              name 
              description
              slug
              skills {
                data {
                  attributes {
                    name
                    body
                    slug
                    cover {
                      ...FileParts
                    }
                    link {
                      newTab
                      url
                      text
                    }
                  }
                }
              }
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
      `
    })
  })
  const res = await getAllSkillsData.json()
  return res
}

export const getSkill = async (slug) => {
  const getSkillData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
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
      query($slug: String! ){
        skills(filters: {
          slug: {
            contains: $slug
          }
        }) {
          data {
            attributes {
              name
              body
              slug
              link {
                newTab
                url
                text
              }
              cover {
                ...FileParts
              }
            }
          }
        }
      }
      `, 
      variables: {
        slug
      }
    })
  }
  )
  const res = await getSkillData.json()
  return res
}