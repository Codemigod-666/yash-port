"use client"

import { useState } from "react"
import FormControls from "../form-controls"


const controls = [
    {
        name: 'heading',
        placeholder: 'Enter Heading Text',
        type: 'text',
        label: 'Enter Heading Text'
    },
    {
        name: 'summary',
        placeholder: 'Enter Career Text',
        type: 'text',
        label: 'Enter Career Text'
    }
]

export default function AdminHomeView({formData, setFormData, handleSaveData}) {
    // console.log(formData);
    return <div className="w-full">
        <div className="bg-[#ffffff] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <FormControls
                controls={controls}
                formData={formData}
                setFormData={setFormData}
            />
        </div>

        <button onClick={() => handleSaveData('home')} className="border rounded-lg border-green-500 p-4 font-bold text-[16px] mt-[10px]"> Add Info</button>
    </div>
}
//  heading text with summary