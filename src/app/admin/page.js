"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { addData, getData, login, updateData } from "../services";
import { data } from "autoprefixer";
import Login from "@/components/admin-view/login";
import { useRouter } from "next/navigation";

const initialLoginFormData = {
  username: "",
  password: "",
};

const initialHomeFormData = {
  heading: "",
  summary: "",
};

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialProjectFormData = {
  name: "",
  technologies: "",
  website: "",
  github: "",
};

export default function AdminView() {
  const router = useRouter();
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");

  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [allData, setAllData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);

  
  // get the data on page load
  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.education}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.experience}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.project}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: <AdminContactView data={allData?.contact} />,
    },
  ];

  async function handleSaveData() {
    const datamap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, datamap[currentSelectedTab])
      : await addData(currentSelectedTab, datamap[currentSelectedTab]);
    // console.log("Response: ", response);
    if (response.success) {
      resetFormData();
      extractAllDatas();
    }
  }

  function resetFormData() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setEducationViewFormData(initialEducationFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  // get the list of data on page load
  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);
    // pre render the data if the selected tab is home of about
    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(data && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(data && response.data[0]);
      setUpdate(true);
    }
    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogin() {
    const res = await login(loginFormData);

    if (res?.success === true) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  const handleLogout = () => {
    setAuthUser(false);
    sessionStorage.removeItem('authUser');
  }

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleLogin={handleLogin}
      />
    );

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((items) => (
          <button
            key={items.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(items.id);
              resetFormData();
              setUpdate(false);
            }}>
            {items.label}
          </button>
        ))}
      </nav>
      <div className="flex flex-row justify-end items-center px-2">
        <button 
        onClick={() => {
          handleLogout();
          router.push('/');
        }}
        className="bg-orange-500 text-[#fff] font-bold p-3 rounded-lg">
          Logout
        </button>
      </div>

      <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
}
