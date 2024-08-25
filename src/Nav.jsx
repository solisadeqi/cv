import { FaRegularFilePdf } from 'solid-icons/fa';
import { BsFiletypeDoc } from 'solid-icons/bs';
import { AiFillLinkedin } from 'solid-icons/ai';
import { BiRegularMailSend } from 'solid-icons/bi';
import { AiTwotonePhone } from 'solid-icons/ai';
import { TbWorldWww } from 'solid-icons/tb';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { createSignal } from 'solid-js';
import clsx from "clsx";




function Nav(params) {
    
    const [loading, setLoading] = createSignal(false);

    const downloadPDF = async () => {
        setLoading(true);
        const element = document.getElementById('cv');
        if (!element) {
          console.error("Element with id 'cv' not found");
          setLoading(false);
          return;
        }
    
        try {
          const canvas = await html2canvas(element, { scale: 2 });
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgProps = pdf.getImageProperties(imgData);
          const imgWidth = imgProps.width;
          const imgHeight = imgProps.height;
          const ratio = imgWidth / pdfWidth;
          const totalPages = Math.ceil(imgHeight / (pdfHeight * ratio));
    
          for (let i = 0; i < totalPages; i++) {
            const position = -i * pdfHeight;
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight / ratio);
            if (i < totalPages - 1) {
              pdf.addPage();
            }
          }
    
          pdf.save('soleiman.sadeghi.cv.pdf');
        } catch (error) {
          console.error('Error generating PDF', error);
        } finally {
          setLoading(false);
        }
      };

  return (
    <div class="bg-neutral-200 flex justify-around p-2 flex-wrap">
      
      <div class="flex flex-wrap gap-2">
        
        <a href={params.contact.web} class='w-fit flex px-1 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold'>
          <TbWorldWww class="size-5 text-blue-800 mx-4" />
        </a>

        <a href={params.contact.linkedin} class='w-fit flex px-1 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold'>
          <AiFillLinkedin class="size-5 text-blue-600" />
        </a>

        <div class="w-fit flex px-2 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold">
          <BiRegularMailSend class="size-5 text-red-900 mr-2" />
          <small class="tracking-widest font-bold duration-500">
            {params.contact.email}
          </small>
        </div>

        <div class="w-fit flex px-2 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold">
          <AiTwotonePhone class="size-5 text-gray-700 mr-2" />
          <small class="tracking-widest font-bold duration-500">
            {params.contact.phone}
          </small>
        </div>

      </div>

      <div class="flex flex-wrap">
        {/* <button
          class="w-40 flex border border-gray-300 px-2 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold"
        //   onClick={downloadWord}
        >
          <BsFiletypeDoc class="size-5 text-blue-700 mr-2" />
          <small class="hover:tracking-widest hover:font-bold duration-500">
            Download .doc
          </small>
        </button> */}

        <button
          class="w-40 flex border border-gray-300 px-2 py-1 rounded-sm hover:bg-neutral-300 duration-500 hover:text-bold"
          onClick={downloadPDF} 
          disabled={loading()}
        >
          <FaRegularFilePdf class="size-5 text-red-700 mr-2" />
          <small 
          class={clsx(
            'duration-500',
            'hover:tracking-widest',
            'hover:font-bold',
          )}
          disabled = {loading() ? true : false}
          >
            {
                loading() ? 
                <small > Processing... </small>
                :
                <small > Download PDF </small>
            }
            
          </small>
        </button>
 
      </div>
    </div>
  );
}

export default Nav;
