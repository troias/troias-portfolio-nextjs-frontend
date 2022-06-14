import React from 'react'
import PortfolioNav from '../../../../components/page-components/portfolioNav'
import { getSkill } from '../../../../utils/api'
import Image from "../../../../components/elements/image"
import Link from 'next/link'


const Index = ({ skill }) => {

  // console.log("SkillInnerSkill", skill.attributes.body)
  return (
    <div className=" bg-white flex-wrap">
      <PortfolioNav />
      <div className="w-full flex justify-center  mb-12">
        <h1 className="pt-8 pb-8 text-grey-800 text-5xl font-bold   ">{skill.attributes.name}</h1>
      </div>
      <div className="flex justify-center ">


        <div className="max-w-screen-lg  w-full">
          <div className="pr-2 pl-2 flex-col sm:flex justify-around">

            <div className="w-64 h-64 m-auto ">
              {skill.attributes.cover.data && <Image media={skill.attributes.cover} />}
            </div>
            <div className="w-4/5 sm:w-2/5 flex m-auto mb-8">
              <p>
                {skill.attributes.body}
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center mt-6">
              <h2 className="text-2xl font-bold">Links</h2>
            </div> */}
          <div className="flex justify-center mt-6 mb-8">
            {skill.attributes.link && (
              skill.attributes.link.map(skill => (
                <>
                  <btn className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 hover:bg-sky-700 " key={skill.id}>
                    <Link href={skill.url} >
                      {skill.text}
                    </Link>
                  </btn>
                </>
              )
              )
            )}

          </div>

          {skill.attributes.sandbox_url && <div className="mt-6 pr-2 pl-2 mb-6">
            <div className="flex justify-center mb-6  ">
              <h2 className="text-2xl font-bold mt-6 mb-6"> CodeSandbox Example</h2>
            </div>

            <iframe
              src={skill.attributes.sandbox_url}
              className="w-full h-[500px] rounded-xl overflow-hidden pl-4 pr-4"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>

          </div>}

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

  // console.log("paths", paths)
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
    },
    revalidate: 1
  }
}


