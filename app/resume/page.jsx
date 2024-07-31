"use client";

import { Duru_Sans } from 'next/font/google';
import { FaHtml5, FaSwift, FaJs, FaReact, FaAndroid, FaNodeJs } from 'react-icons/fa'
import { SiAndroidstudio, SiXcode, SiAdobephotoshop, SiCoreldraw } from 'react-icons/si'

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About me',
  description: 'Experienced professional with a strong background in mobile app development.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Dhruv Tailor'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 437 838 4558'
    },
    {
      fieldName: 'Experience',
      fieldValue: '5+ Years'
    },
    {
      fieldName: 'Github',
      fieldValue: 'https://github.com/dhruvtailor/'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'dhruv.tailor@georgebrown.ca'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, Gujarati'
    },
    {
      fieldName: 'Linked In',
      fieldValue: 'https://www.linkedin.com/in/dhruv-tailor/'
    },
    
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Skilled in mobile app development for Android and iOS, with a focus on designing, developing, and deploying efficient applications, as well as troubleshooting and API integration.',
  items: [
    {
      company: "Flexit Inventions",
      position: "Senior Android Developer",
      duration: "2022-2023"
    },
    {
      company: "Cursor Soft Pvt. Ltd.",
      position: "Android Application and IoT Developer",
      duration: "2017-2022"
    }
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Experienced in mobile app development with a strong foundation in both Android and iOS platforms.',
  items: [
    {
      institution: "Grorge Brown College",
      degree: "Mobile Application Development and Strategy",
      duration: "2024-Present"
    },
    {
      institution: "Gujarat Technological University",
      degree: "Bachelor in Computer Science",
      duration: "2013-2017"
    },
  ]
}

//skills data
const skills = {
  title: 'My skills',
  description: 'Proficient in a variety of programming languages and development tools, specializing in mobile and web applications.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html5'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaAndroid />,
      name: 'android'
    },
    {
      icon: <FaNodeJs />,
      name: 'nodejs'
    },
    {
      icon: <FaReact />,
      name: 'react-native'
    },
    {
      icon: <FaSwift />,
      name: 'swift'
    },
    {
      icon: <SiAndroidstudio />,
      name: 'android-studio'
    },
    {
      icon: <SiXcode />,
      name: 'xcode'
    },
    {
      icon: <SiAdobephotoshop />,
      name: 'adobe-photoshop'
    },
    {
      icon: <SiCoreldraw />,
      name: 'corel-draw'
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='min-h-[70vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList
            className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'
          >
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[350px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[350px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[650px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                {/* <ScrollArea className='h-[380px]'> */}
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
                {/* </ScrollArea> */}
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-l'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
};

export default Resume;