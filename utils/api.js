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
              contactDetails {
                name
                address
              }
                intro
                body
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
                      }
                    }
                  }
                  
                }
                qualifications {
                  qualification {
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
        `
      })
    })
    const data = await response.json()
    return data
  }