import React from 'react'
import Link from 'next/link'
import PortfolioNav from '../../components/page-components/portfolioNav'

const SkillItem = () => {
  return (
    <div className="min-h-screen bg-white ">
      <PortfolioNav />
      <div className="w-full flex justify-center ">
        <h1 className="pt-8 pb-8 text-grey-800 text-5xl font-bold   ">React</h1>
      </div>
      <div className="flex justify-center min-h-screen">


        <div className="max-w-screen-lg  w-full">
          <div className="pr-2 pl-2 flex justify-between">
           
            <div className="w-1/2">
            <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="w-2/5 flex items-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl
                urna consectetur nisi, eget consectetur nisl nisi vel nisi.

              </p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
          
              <Link href="/skills">
                <a className=" text-black font-bold py-2 px-4">View All React Skills</a>
              </Link>
          
          </div>




          <div className="pb-8 pt-8">
    

            <div className="flex justify-around flex-wrap pr-2 pl-2  ">

            

                <table class="shadow-lg bg-white w-full  ">
                  <tr>
                    <th class="bg-blue-100 border text-left px-8 py-4">Skill Title</th>
                
                  </tr>
                  <tr>
                    <td class="border px-8 py-4">UseEffect</td>
                   
                  </tr>
                  <tr>
                    <td class="border px-8 py-4">Centro comercial Moctezuma</td>
                   
                  </tr>
                  <tr>
                    <td class="border px-8 py-4">Ernst Handel</td>
                   
                  </tr>
                </table>
           


            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default SkillItem
