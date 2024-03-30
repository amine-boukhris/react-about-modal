import { X } from 'lucide-react'
import img1 from './assets/profile1.jpg'
import img2 from './assets/profile2.jpg'

const Card = () => {
    const persons = [
        {
            img: img1,
            name: 'Scarlette W.',
            role: 'Product Designer',
        },
        {
            img: img2,
            name: 'Lennon H.',
            role: 'Webflow Developer',
        },
    ]

    return (
        <div className="sm:max-w-[700px] sm:h-auto font-medium w-full h-full bg-slate-50 text-slate-950 sm:rounded-2xl p-5 flex flex-col justify-between sm:justify-center sm:px-24 sm:py-8 gap-8">
            <div className="flex justify-end">
                <button className="py-2 px-4 bg-slate-200 rounded-full flex items-center gap-1 font-semibold sm:translate-x-16 hover:text-slate-50 hover:bg-slate-950 duration-150">
                    Close{' '}
                    <span>
                        <X size={18} strokeWidth={3} />
                    </span>
                </button>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12">
                <div className="xs:max-sm:text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold my-2 sm:my-3">
                        About
                    </h1>
                    <p className="text-slate-600 xs:max-sm:max-w-[60ch] sm:text-lg">
                        We're a two-person team with a thing for startups.
                        Between us, we've spent 15 years diving into the startup
                        world.
                    </p>
                </div>
                <div className="flex justify-center gap-3">
                    {persons.map(({ img, name, role }) => (
                        <div
                            key={name}
                            className="flex-1 bg-slate-200 rounded-2xl shadow-sm flex flex-col items-center gap-3 py-4 px-0 sm:py-8 cursor-pointer hover:bg-slate-300 duration-150 group"
                        >
                            <img
                                className="rounded-full size-20 xs:size-24 sm:size-28 group-hover:scale-105 group-hover:-translate-y-4 duration-300 ease-out"
                                src={img}
                            />
                            <div className="text-center">
                                <h2 className="text-slate-800 text-base xs:text-lg font-bold">
                                    {name}
                                </h2>
                                <p className="text-slate-600 text-sm xs:text-base">
                                    {role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="xs:max-sm:text-center">
                    <p className="text-slate-600 xs:max-sm:max-w-[60ch] sm:text-lg">
                        We've been in the trenches, working side by side with
                        founders and teams. we know what it's like. Startups
                        need growth, and we're here to make sure your design
                        pulls its weight.
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                <button className="py-3 px-5 bg-slate-950 text-slate-50 rounded-full flex items-center font-semibold sm:text-lg sm:px-6 hover:bg-slate-800 duration-150">
                    Email
                </button>
                <button className="py-3 px-5 bg-slate-200 rounded-full flex items-center font-semibold sm:text-lg sm:px-6 hover:bg-slate-950 hover:text-slate-50 duration-150">
                    Book a call
                </button>
            </div>
        </div>
    )
}

export default Card
