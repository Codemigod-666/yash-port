"use client"

import FormControls from "../form-controls";

export default function AdminExperienceView({formData, setFormData, handleSaveData,data}) {
    const controls = [
        {
          name: "position",
          placeholder: "Position",
          type: "text",
          label: "Position",
        },
        {
          name: "company",
          placeholder: "Company",
          type: "text",
          label: "Company",
        },
        {
          name: "duration",
          placeholder: "Duration",
          type: "text",
          label: "Duration",
        },
        {
          name: "location",
          placeholder: "Location",
          type: "text",
          label: "Location",
        },
        {
          name: "jobprofile",
          placeholder: "Job Profile",
          type: "text",
          label: "Job Profile",
        },
      ];
    return <>
    <div>Admin Experience View</div>
    <div className="w-full">
    <div className="mb-10">
      {
        data && data.length?
        data.map((item, index )=> <div key={index} className="flex flex-col gap-4 border border-green-700 p-4">
            <p>{item.position}</p>
            <p>{item.company}</p>
            <p>{item.duration}</p>
            <p>{item.location}</p>
            <p>{item.jobprofile}</p>
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

        <button onClick={() => handleSaveData('experience')} className="border rounded-lg border-green-600 p-4 font-bold text-[16px] mt-[10px]"> Add Info</button>
    </div>
    </> 
}