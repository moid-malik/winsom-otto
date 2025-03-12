"use client";
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

const AboutUs = () => {
    const [state, handleSubmit] = useForm("xjkyvedl");
    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl mt-20 mb-48 font-thin">THANK YOU</h2>
                    <p className="mb-12">We will get back to you as soon as possible.</p>
                    <Link href="/" className="bg-black text-white px-4 py-2 rounded-full">
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-4xl mt-20 mb-48 font-thin uppercase">contact US</h2>
            <div className="flex flex-col gap-4 tracking-wider leading-none font-[300] mb-12 text-xl">
                <p className="">
                    Address: Some address of Gulshan e Iqbal Karachi
                </p>
                <p className="">WhatsApp Us: +92 1234567890</p>
                <p className="">Customer Support: helloelyscents@gmail.com</p>
                <p className="">UAE address: 000, BLDG 0 Diera DXB</p>
            </div>
            <div className="font-thin tracking-widest my-12 text-3xl flex flex-col gap-4 uppercase">
                <h3 className="">SEND US A MESSAGE OR EMAIL US AT</h3>
                <p className="">youremail@MAIL.COM</p>
            </div>
            <form className="w-full max-w-md text-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 border rounded w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 border rounded w-full"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="p-2 border rounded w-full h-32 mb-4"
                ></textarea>
                <button type="submit" disabled={state.submitting} className="bg-black text-white px-6 py-2 rounded">
                    SEND
                </button>
            </form>
        </div>
    );
};

export default AboutUs;
