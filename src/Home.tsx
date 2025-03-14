export default function Home() {
    return (
        <main className="min-h-screen min-w-screen bg-[#b5c4a0] flex flex-col items-center justify-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
                <div className="w-full h-full md:w-2/5 flex justify-start">
                    <img
                        src="../images/main.png"
                        alt="Artistic illustration of overlapping faces representing mental health diversity"
                        width={600}
                        height={1000}
                    />
                </div>

                <div className="w-full md:w-3/5 text-right">
                    <p className="text-[#e07a5f] uppercase tracking-wider text-2xl font-garet font-bold">Launching Soon</p>
                    <h1 className="text-[65px] text-white mt-8">
                        A Mental Health Platform <br />
                        That <span className="text-[#e07a5f] underline decoration-white underline-offset-24">
                            Truly Cares
                        </span>
                    </h1>
                    <p className="text-white mt-12 text-xl">
                        Attending to your mental health is a
                        <br />
                        <span className="">form of self-care.</span>
                        <span className="italic"> It is a treat, not a task!</span>
                    </p>


                    <div className="text-right mt-24">
                        <h2 className="text-[#c19a6b] text-8xl md:text-7xl font-noto-condensed tracking-wide">FOLKS</h2>
                        <p className="text-[#fff] uppercase tracking-widest text-s font-garet">who truly care</p>
                    </div>
                </div>
            </div>


        </main>
    )
}

