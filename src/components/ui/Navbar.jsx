export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-transparent w-full block">
            <div className="flex justify-between items-center px-8 bg-slate-100 text-slate-900">
                <div className="">
                    Tiktok
                    LinkedIn
                    Instagram
                </div>
                <div className="flex items-center">
                   <a href="#" className="px-4 py-2 text-black rounded-tl-lg hover:bg-gray-100">Profile</a>
                   <a href="#" className="px-4 py-2 text-black rounded-none hover:bg-gray-100">Skills</a>
                   <a href="#" className="px-4 py-2 text-black rounded-none hover:bg-gray-100">Experience</a>
                   <a href="#" className="px-4 py-2 text-black rounded-r-lg hover:bg-gray-100">Contacts</a>
                </div>
                <div>
                    {/* email */}
                    <a href="#" className="px-4 py-2 text-black rounded-tl-lg hover:bg-gray-100">tomisedunia@gmail.com</a>
                </div>
            </div>
        </nav>
    )
}