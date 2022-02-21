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
                  skill_categories {
                    data {
                      attributes {
                        name
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