

import { useState } from "react"
import FormatDate from "../components/FormatDate"
import Picture from "../components/Picture"
import TitleLink from "../components/TitleLink"
import Materail from "../components/Materail"
import Description from "../components/Description"
import Tech from "../components/Tech"
import { data } from '../content/experience'
const SECTION_ID = 'experience-section'

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({})

  return (
    <div id={SECTION_ID}>
      <div className={`text-primaryAccent font-medium px-2`}>Projects</div>
      {
        data.map(({ date="", title="", link="", materials = [], description=[], skills=[], picture="",tool=[] }, index) => (
          <div
          key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
          className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? 'bg-primaryBase ' : ""}`}
            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
          >
            <div>
              <FormatDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormatDate>
              <Picture picture={picture} title={title} />
            </div>

            <div className="grid gap-y-4 ">
              <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} tool={tool} materials={materials}/>

            {
              materials.length > 0 ?
               <div className="flex gap-4 text-xl items-center">
                {
                  materials.map((e, i) => (
                    <Materail key={`${e}-materials-${i}`} icon={e.type} link={e.link} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} />
                  ))
                }
              </div>
              : null
            }
             
              {
                description.map((e, i) => (
                  <Description key={`${e}-description-${i}`} description={e} />
                ))
              }

              {
                skills.map((e,i)=>(
                   <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                ))
              }
             
            </div>
          </div>
        ))
      }


    </div>

  )
}
export default Experience