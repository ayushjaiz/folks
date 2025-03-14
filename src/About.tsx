import { Instagram, Linkedin, Mail } from "lucide-react";

export default function About() {
    return (
        <div className="font-youngest min-h-screen flex flex-col justify-between bg-[#f9f5eb]">
            <main className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center">
                <div className="max-w-3xl mx-auto text-center relative px-4">
                    <div className="text-[#c27c60] text-6xl md:text-[120px] absolute -left-4 md:-left-16 top-0">"</div>

                    <h1 className="text-[#a67c52] text-2xl md:text-3xl mb-6 md:mb-8">A NOTE FROM THE MAKERS</h1>

                    <p className="text-[#a67c52] text-lg md:text-xl leading-relaxed mb-8 md:mb-12 px-2 md:px-8">
                        We are building FOLKS with a simple belief; mental health care should feel like home. A place where
                        you&apos;re heard, understood, and supported without barriers. This is just the beginning, and we&apos;re
                        building it with heart, for you.
                    </p>

                    <div className="text-[#c27c60] text-6xl md:text-[120px] absolute -right-4 md:-right-16 bottom-0">"</div>
                </div>

                <div className="mt-12 md:mt-16">
                    <h2 className="text-[#a67c52] text-4xl md:text-5xl">FOLKS</h2>
                </div>
            </main>

            <footer className="w-full bg-[#c2c5aa] py-4 px-4 md:px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/folksmentalhealth" className="text-[#5c5c42]">
                            <Instagram size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-[#5c5c42]">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:folksmentalhealth@gmail.com" className="text-[#5c5c42]">
                            <Mail size={24} />
                        </a>
                    </div>

                    <span className="text-[#5c5c42] text-sm text-center">folksmentalhealth@gmail.com</span>

                    <div className="text-[#5c5c42] text-sm">Copyright © FOLKS - All Rights Reserved</div>
                </div>
            </footer>
        </div>
    );
}