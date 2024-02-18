"use client"

import FormControls from "../form-controls";

export default function AdminEducationView({formData, setFormData, handleSaveData, data}) {
    
const controls = [
    {
      name: "degree",
      placeholder: "Degree Name",
      type: "text",
      label: "Enter Degree Name",
    },
    {
      name: "year",
      placeholder: "Year",
      type: "text",
      label: "Year",
    },
    {
      name: "college",
      placeholder: "College Name",
      type: "text",
      label: "Enter College Name",
    },
  ];
  
    return <>
    <div>Admin Education View</div>
    <div className="w-full">
      <div className="mb-10">
        {
          data && data.length?
          data.map((item, index) => <div key={index} className="flex flex-col gap-4 border border-green-700 p-4">
              <p>{item.degree}</p>
              <p>{item.year}</p>
              <p>{item.college}</p>
              
            </div>)
            : null
        }
        </div>
        <div className="bg-[#ffffff] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <FormControls
                controls={controls}
                formData={formData}
                setFormData={setFormData}
            />
        </div>

        <button onClick={() => handleSaveData('education')} className="border rounded-lg border-green-600 p-4 font-bold text-[16px] mt-[10px]"> Add Info</button>
    </div>
    </> 
}