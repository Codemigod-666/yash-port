import ClientAboutView from '@/components/client-view/about';
import ClientHomeView from '@/components/client-view/home';
import ClientExperienceAndEducationView from '@/components/client-view/ExperienceAndEducaiton';
import ClientProjectView from '@/components/client-view/project';
import ClientContactView from '@/components/client-view/contact';


async function extractAllDatas(currentSection) {
  const res = await fetch(`https://yash-port-zeta.vercel.app/api/${currentSection}/get`, {
    method: 'GET',
    cache: 'no-store',
  });

  console.log("res", res)

  const data = await res.json();
  return data && data.data;
}

export default async function Home() {

  const homeSectionData = await extractAllDatas('home');
  const aboutSectionData = await extractAllDatas('about');
  const experienceSectionData = await extractAllDatas('experience');
  const educationSectionData = await extractAllDatas('education');
  const projectSectionData = await extractAllDatas('project');

  return (
    <>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView data={
        aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
      } />
      <ClientExperienceAndEducationView educationData={educationSectionData} experienceData={experienceSectionData} />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />

    </>
  )
}
