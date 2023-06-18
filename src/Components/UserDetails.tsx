

export default function UserDetails() {
    return (
        <div className="lg:px-[3rem] px-[2rem] pt-[2rem]">
            <h1>Untitled</h1>
            <section className="lg:grid grid-cols-2 gap-6 place-content-center">
                {/* <h3>Personal Details</h3> */}
                <div className="w-full inputDetails">
                    <p>Wanted Job Title</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="mt-6 lg:mt-9">
                    <div className="flex items-center gap-3">
                        <img src="userImg.jpeg" className="w-[45px] p-2 lg:p-1 rounded-md bg-gray-300 "/>
                        <p className="text-blue-500 text-sm">Upload photo</p>
                    </div>
                </div>
                <div className="inputDetails">
                    <p>First Name</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="inputDetails">
                    <p>Last Name</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="inputDetails">
                    <p>Email</p>
                    <input 
                        type="email"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="inputDetails">
                    <p>Phone</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="inputDetails">
                    <p>Country</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
                <div className="inputDetails">
                    <p>City</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none"
                    />
                </div>
            </section>
        </div>
    )
}
