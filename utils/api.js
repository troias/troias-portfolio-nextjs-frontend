export const getPortfolioData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
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

          

          codingDv {
            data {
              attributes {
                title
                bio
                intro
                body
                
              contactDetails {
                name
                address
                iconImage {
                  ...FileParts
                }
                 }
            
                interests {
                  name
                }

                strenghts {
                  name
                }

                referees {
                  name
                }

                projects {
                  project {
                    data {
                      attributes {
                        name
                        body
                        featured
                        images {
                          ...CollectionParts
                        }
                        link {
                          url
                          text
                        }
                        slug
                        skill_categories {
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

                employment {
                  job {
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
                }

                skills {
                  skill_category {
                    data {
                      attributes {
                        name 
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

                qualifications {
                  qualification {
                    data {
                      attributes {
                        name
                        completed
                        institution
                        distinction
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
  const data = await response.json()
  return data
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


