"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Android Development',
        description: 'Expert in developing robust and user-friendly Android applications using Kotlin and Java, with experience in GPS tracking, trip booking, and fare collection apps.',
        href: '/contact'
    },
    {
        num: '02',
        title: 'iOS Development',
        description: 'Specialized in creating intuitive and seamless iOS applications using Swift and SwiftUI, focusing on user experience and functionality.',
        href: '/contact'
    },
    {
        num: '03',
        title: 'Web Development',
        description: 'Specialized in creating intuitive and seamless iOS applications using Swift and SwiftUI, focusing on user experience and functionality.',
        href: '/contact'
    },
    {
        num: '04',
        title: 'API Development',
        description: 'Proficient in developing efficient and scalable APIs, integrating RESTful services and external APIs to enhance application functionality.',
        href: '/contact'
    },
    {
        num: '05',
        title: 'IoT Development',
        description: 'Skilled in designing and developing Internet of Things (IoT) solutions, including device integration, sensor data collection, and smart automation systems.',
        href: '/contact'
    },
    {
        num: '06',
        title: 'Data Analysis',
        description: 'Skilled in analyzing datasets and applying Machine Learning to uncover insights, build predictive models, and support data-driven decisions using Python and SQL.',
        href: '/contact'
    }
]

const Services = () => {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeIn'
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>

                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>

                            {/* description */}
                            <p className="text-white/60">{service.description}</p>

                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
};

export default Services;