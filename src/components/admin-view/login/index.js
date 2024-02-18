"use client"
import { useRouter } from "next/navigation";
import FormControls from "../form-controls";

const controls = [
    {
        name: 'username',
        placeholder: 'Enter User Name',
        type: "text",
        label: "Enter User Name"
    },
    {
        name: 'password',
        placeholder: 'Enter Your Password',
        type: 'password',
        label: 'Enter Your Password'
    }
]

const Login = ({formData, setFormData, handleLogin}) => {
    const router = useRouter();
    return (
        <>
            <button onClick={() => router.push('/') } className="absolute top-2 left-2 bg-white-500 hover:bg-white-300 border-green-500 border-2 p-3 rounded-lg font-bold"> <span className="text-green-500 font-extrabold">&lt;-</span> Go Back</button>
            <div className="w-full h-svh flex flex-col justify-center items-center">
                <div className="bg-[#ffffff] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <FormControls
                        controls={controls}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>

                <button
                
                onClick={handleLogin} className="border rounded-lg border-green-600 p-4 font-bold text-[16px] mt-[10px]"> Log In</button>
            </div>
        </>
    )
}

export default Login;