"use client"
import FormControls from "../form-controls";

export default function AdminAboutView({formData, setFormData, handleSaveData}) {
    const controls = [
        {
          name: "aboutme",
          placeholder: "About Me",
          type: "text",
          label: "About Me",
        },
        {
          name: "noofprojects",
          placeholder: "No of projects",
          type: "text",
          label: "Enter no of projects",
        },
        {
          name: "yearofexperience",
          placeholder: "No of experience",
          type: "text",
          label: "Enter no of experience",
        },
        {
          name: "noofclients",
          placeholder: "No of clients",
          type: "text",
          label: "Enter no of clients",
        },
        {
          name: "skills",
          placeholder: "skills",
          type: "text",
          label: "Skills",
        },
      ];
      
    return<>
    <div>Admin About View</div>
    <div className="w-full">
        <div className="bg-[#ffffff] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <FormControls
                controls={controls}
                formData={formData}
                setFormData={setFormData}
            />
        </div>

        <button onClick={() => handleSaveData('about')} className="border rounded-lg border-green-600 p-4 font-bold text-[16px] mt-[10px]"> Add Info</button>
    </div>
    </> 
}