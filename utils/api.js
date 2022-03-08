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