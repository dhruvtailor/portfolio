"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+1) 437 838 4558'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'dhruv.tailor@georgebrown.ca'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: '1440 Lawrence Avenue West, North York, ON, M6L 1B4, Canada'
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        reply_to: '',
    });

    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            reply_to: formData.email,
        };

        emailjs.send('portfolio_email', 'template_email_portfolio', templateParams, 'pteIwuYLjcKt6DJOX')
            .then((result) => {
                console.log(result.text);
                setAlertMessage('Message sent successfully!');
                setShowAlert(true);
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    replyto: '',
                });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
                setAlertMessage('Failed to send message, please try again.');
                setShowAlert(true);
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
            }}
            className="py-6 "
        >
            {/* Centered Alert */}
            {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <div className="bg-[#27272c] p-10 rounded-lg shadow-lg w-1/3 shadow-md text-center">
                        <p>{alertMessage}</p>
                        <Button onClick={() => setShowAlert(false)} className="mt-4">Close</Button>
                    </div>
                </div>
            )}

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Let's collaborate to bring your ideas to life!
                            </p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                                <Input type="lastname" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                                <Input type="phone" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
                            </div>

                            {/* select */}
                            <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Android Development">Android Development</SelectItem>
                                        <SelectItem value="iOS Development">iOS Development</SelectItem>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="API Development">API Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1 ">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-md">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Contact;