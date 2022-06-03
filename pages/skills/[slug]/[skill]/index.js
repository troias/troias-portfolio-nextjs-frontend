import React from 'react'
import PortfolioNav from '../../../../components/page-components/portfolioNav'
import { getSkill, getAllSkills } from '../../../../utils/api'
import Image from "../../../../components/elements/image"
import Link from 'next/link'

const Index = ({ skill }) => {

  console.log("SkillInnerSkill", skill)
  return (
    <div className="min-h-screen bg-white">
      <PortfolioNav />
      <div className="w-full flex justify-center ">
        <h1 className="pt-8 pb-8 text-grey-800 text-5xl font-bold   ">{skill.attributes.name}</h1>
      </div>
      <div className="flex justify-center min-h-screen">


        <div className="max-w-screen-lg  w-full">
          <div className="pr-2 pl-2 flex justify-around">

            <div className="w-64 h-64">
              {skill.attributes.cover.data && <Image media={skill.attributes.cover} />}
            </div>
            <div className="w-2/5 flex items-center">
              <p>
                {skill.attributes.body}

              </p>
            </div>
          
          
          
         
               
       
        
          </div>
          <div className="flex justify-center">

          <btn class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 <Link href={skill.attributes.link.url} >
                    {skill.attributes.link.text}
                 </Link>
               
               </btn>

          </div>
   
        </div>
      </div>


    </div>
  )
}
export default Index


export const getStaticPaths = async (ctx) => {

    console.log("paramsgetStaticPaths", ctx);

    const getSlugs = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: `

            query {
              skillCategories {
                data {
                  attributes {
                    slug
                    skills {
                      data {
                        attributes {
                          slug
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

    const getSlugsJson = await getSlugs.json()

    

    const paths = getSlugsJson.data.skillCategories.data.map(skillCategory => {
        return skillCategory.attributes.skills.data.map(skill => {
            return {
                params: {
                    slug: skillCategory.attributes.slug,
                    skill: skill.attributes.slug
                }
            }
        }
        )
    }
    ).flat()

    console.log("paths", paths)
    return {

        paths: paths,
        fallback: false
    }

}

export const getStaticProps = async ({ params }) => {

  const data = await getSkill(params.skill)

  const skill = data.data.skills.data[0]

  // console.log("getStaticPropsData", data.data.skills.data[0]);

  // const skill = data.data.skillCategories.data[0]

  return {
    props: {
      skill
    }
  }
}


