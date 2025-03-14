import logo from '../public/images/main.png';

export default function Home() {
    return (
        <main className="min-h-screen min-w-screen bg-[#b5c4a0] flex flex-col items-center justify-center p-4 md:p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
                <div className="w-full h-full md:w-2/5 flex justify-center md:justify-start">
                    <img
                        src={logo}
                        alt="Artistic illustration of overlapping faces representing mental health diversity"
                        className="w-4/5 md:w-full max-w-sm md:max-w-none"
                    />
                </div>

                <div className="w-full md:w-3/5 text-center md:text-right">
                    <p className="text-[#e07a5f] bg-white px-4 py-2 rounded-lg shadow-md uppercase tracking-widest font-garet font-bold inline-block">
                        Launching Soon
                    </p>
                    <h1 className="text-4xl md:text-5xl text-white mt-6 md:mt-8 leading-tight">
                        A Mental Health Platform <br />
                        That <span className="text-[#e07a5f] underline decoration-white underline-offset-8 md:underline-offset-24">
                            Truly Cares
                        </span>
                    </h1>
                    <p className="text-white mt-8 md:mt-12 text-lg md:text-xl leading-relaxed">
                        Attending to your mental health is a form
                        <br />
                        <span className="">of self-care.</span>
                        <span className="italic"> It is a treat, not a task!</span>
                    </p>

                    <div className="text-center md:text-right mt-16 md:mt-24">
                        <h2 className="text-[#c19a6b] text-6xl md:text-7xl font-noto-condensed tracking-wide">FOLKS</h2>
                        <p className="text-[#fff] uppercase tracking-widest text-xs md:text-sm font-garet">who truly care</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
