"use client"
import FormControls from "../form-controls";

export default function AdminProjectView({formData, setFormData, handleSaveData, data}) {
    const controls = [
        {
          name: "name",
          placeholder: "Project Name",
          type: "text",
          label: "Project Name",
        },
        {
          name: "technologies",
          placeholder: "Enter Technologies",
          type: "text",
          label: "Enter Technologies",
        },
        {
          name: "website",
          placeholder: "Website",
          type: "text",
          label: "Website",
        },
        {
          name: "github",
          placeholder: "Github",
          type: "text",
          label: "github",
        },
      ];
    return <>
    <div>Admin Project View</div> 
    <div className="w-full">
    <div className="mb-10">
        {
          data && data.length?
          data.map((item, index) => <div key={index} className="flex flex-col gap-4 border border-green-700 p-4">
              <p>{item.name}</p>
              <p>{item.technologies}</p>
              <p>{item.website}</p>
              <p>{item.github}</p>
              
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

        <button onClick={() => handleSaveData('project')} className="border rounded-lg border-green-600 p-4 font-bold text-[16px] mt-[10px]"> Add Info</button>
    </div>
    </> 
}