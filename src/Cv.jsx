import CvSections from './CvSections'

const PRESENT = 'Present'

function getYear(start, end = new Date()) {
    const startDate = new Date(start);
    const endDate = end === PRESENT ? new Date() : new Date(end);
  
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
  
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const yearsDifference = totalMonths / 12;
  
    return yearsDifference.toFixed(1);
}
    

function Cv(params) {

    return (
    <div 
    id="cv"
    class="w-4/6 bg-neutral-100 p-2 m-4 rounded-sm"
    >
            
        {/* Title */}
        <div class="flex justify-between mx-4">

            <span class='bg-blue-50 grow mx-1 p-2 rounded-lg'>
                <div class="font-extrabold text-xl text-blue-700"> {params.name} </div>
                <div class="font-extrabold text-l mb-2"> {params.job} </div>
                <p class="">{params.introduction}</p>
            </span>
            
            <img 
            class="bg-blue-700 h-[10rem] w-[7rem] transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale" 
            src="soli.jpg"
            alt="Soli"
            />
        </div>


        {/* Table */}
        <div class="relative overflow-x-auto sm:rounded-lg my-5 mx-4">
            
            <table class="w-full text-sm bg-blue-50">

                <thead class="bg-blue-100">
                    <tr class="">
                        <th scope="col" class="px-6">
                            Start
                        </th>
                        <th scope="col" class="px-6">
                            End
                        </th>
                        <th scope="col" class="px-6">
                            Organization
                        </th>
                        <th scope="col" class="px-6">
                            Position
                        </th>
                        <th scope="col" class="px-6">
                            Experience(Year)
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        params.exp_data.map(item=>(

                            <tr class="">
                                <th class="p-1 font-normal" scope="col">
                                    {item.start}
                                </th>
                                <th class="font-normal" scope="col">
                                    {item.end}
                                </th>
                                <th class="font-normal" scope="col">
                                    {item.company}
                                </th>
                                <th class="font-normal" scope="col">
                                    {item.role}
                                </th>
                                <th class="font-normal" scope="col">
                                    {()=>getYear(item.start, item.end)}
                                </th>
                            </tr>
                        ))
                    }
                    
                </tbody>

            </table>

        </div>

        <CvSections
        languages={params.languages}
        educations={params.educations}
        exp_data={params.exp_data}
        />
        </div>
        );
}

export default Cv;