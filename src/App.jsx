import { IconFacebook, IconInstagram, IconTwitter } from "./assets/icons";

const footerIcons = [
    { href: "/", icon: <IconFacebook /> },
    { href: "/", icon: <IconTwitter /> },
    { href: "/", icon: <IconInstagram /> },
];
function App() {
    return (
        <main className="relative h-auto lg:min-h-screen bg-violet">
            <img
                src="/images/bg-desktop.svg"
                alt="bg-desktop"
                className="absolute top-0 left-0 hidden object-cover w-full h-full lg:block"
            />
            <img
                src="/images/bg-mobile.svg"
                alt="bg-desktop"
                className="absolute top-0 left-0 block w-full lg:hidden"
            />
            <section className="relative flex flex-col justify-between px-10 lg:px-20">
                <nav className="py-20">
                    <img
                        src="/images/logo.svg"
                        className="w-36 lg:w-56"
                        alt=""
                    />
                </nav>
                <article className="grid w-full grid-cols-1 gap-10 text-white lg:gap-0 place-items-center lg:grid-cols-2">
                    <img
                        src="/images/illustration-mockups.svg"
                        alt=""
                        className=""
                    />
                    <div className="flex flex-col items-center w-full gap-6 text-center lg:pr-0 lg:p-12 lg:items-start lg:text-left">
                        <h1 className="pr-10 text-2xl  lg:text-[44px] font-semibold leading-snug">
                            Build The Community Your Fans Will Love
                        </h1>
                        <p className="text-lg opacity-75">
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion.
                        </p>

                        <button className="px-20 py-3 text-sm duration-150 bg-white rounded-full lg:px-16 lg:py-4 lg:text-lg drop-shadow-2xl text-violet hover:text-white hover:bg-magenta">
                            <h1>Register</h1>
                        </button>
                    </div>
                </article>
                <footer className="flex justify-center py-10 lg:justify-end">
                    <div className="flex gap-4">
                        {footerIcons.map((i) => (
                            <a
                                key={i}
                                href={i.href}
                                className="p-2 text-sm text-white duration-150 border border-white rounded-full lg:text-lg lg:p-3 hover:text-magenta hover:border-magenta"
                            >
                                {i.icon}
                            </a>
                        ))}
                    </div>
                </footer>
            </section>
        </main>
    );
}

export default App;
