import { FaSolidLanguage } from 'solid-icons/fa'
import { FaSolidGraduationCap } from 'solid-icons/fa'
import { BiSolidBriefcase } from 'solid-icons/bi'



function Section({name:name, icon: Icon}) {
    return(
        <h3 class="text-blue-700 font-bold border-b-2 border-blue-300 flex">
            <Icon class='size-6 mr-1'/>
            {name}
        </h3>
    )
}

function Languages(params) {

    return(

        <div>
            <Section name='Langauge' icon={FaSolidLanguage}/>
            <div class="px-4 rounded-lg bg-blue-50">
            {
                params.languages.map((lan, index) => (
                
                <div key={index} class="m-2 mx-10"> 
                    
                    <div class='flex'>
                        <small class='w-[8rem] font-semibold'> {lan.en_name} </small>
                        <small class='w-[7rem] border-x-2 border-gray-300 flex justify-center'> {lan.name} </small>
                        <small class='w-[8rem] flex justify-center'> {lan.level} </small>
                    </div>

                </div>

                ))
            }
            </div>

        </div>
    )
}

function Educations(params) {

    return(

        <div class=''>
            <Section name='Educations' icon={ FaSolidGraduationCap }/>
            <div class="px-4 rounded-lg bg-blue-50">
            {
                params.languages.map((edu, index) => (
                
                <div key={index} class="m-2 mx-10 flex"> 
                    
                    <div class='justify-center'>
                        <div class='font-semibold'> {edu.cert} </div>
                        <small class='font-semibold'> {edu.uni} </small>
                        <div class='text-xs'> {edu.loc} </div>
                    </div>

                </div>

                ))
            }
            </div>

        </div>
    )
}


function Experiences(params) {
    return (
      <div class=''>
        <Section name='Education' icon={BiSolidBriefcase} class='size-2' />
  
        <div class="px-4 rounded-lg bg-blue-50">
          {
            params.exp_data.map((exp, index) => (
              <div key={index} class="m-2 flex bg-blue-50 rounded-lg mb-7 py-2">
                
                <div class='font-bold text-sm w-32 text-center self-start'>
                    <small>{exp.start}</small>
                    <small> ~ </small>
                    <small>{exp.end}</small>
                </div>

                <div class='flex-1'>
                  <div class='mx-2'>
                    <div class='font-semibold'> {exp.role} </div>
                    <small class='font-semibold'>{exp.company} </small>
                    <small class='text-xs'>{exp.location} </small>
                  </div>
  
                  <div class='mx-2 mt-3'> {exp.explanation} </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }


function Sections(params) {
    
    return (
    
    <div class=' my-2'>

        <Experiences 
        exp_data={params.exp_data}
        />
     
        <Educations 
        languages={params.educations}
        />
        <br/>

        <Languages 
        languages={params.languages}
        />
        <br/>

    </div>
    );
}
export default Sections;