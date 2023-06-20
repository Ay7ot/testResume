import { useAppContext } from "../useAppContext"


export default function UserDetails() {

    const {userDetails, dispatch} = useAppContext()
    const {firstName, lastName, jobTitle, country, city, email} = userDetails

    return (
        <div className="lg:px-[3rem] px-[2rem] pt-[2rem] h-screen overflow-y-scroll">
            <h1>Untitled</h1>
            <section className="lg:grid grid-cols-2 gap-6 place-content-center">
                {/* <h3>Personal Details</h3> */}
                <div className="w-full inputDetails">
                    <p>Wanted Job Title</p>
                    <input 
                        type="text"
                        value={jobTitle}
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setJob',
                                payload: {
                                    jobTitle: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="mt-6 lg:mt-9">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <img src="userImg.jpeg" className="w-[45px] p-2 lg:p-1 rounded-md bg-gray-300 "/>
                            <p className="text-blue-500 text-sm">Upload photo</p>   
                                <input type="file"/>
                        </label>
                </div>
                <div className="inputDetails">
                    <p>First Name</p>
                    <input 
                        value={firstName}
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setFirstName',
                                payload: {
                                    firstName: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="inputDetails">
                    <p>Last Name</p>
                    <input 
                        value={lastName}
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setLastName',
                                payload: {
                                    lastName: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="inputDetails">
                    <p>Email</p>
                    <input 
                        value={email}
                        type="email"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setEmail',
                                payload: {
                                    email: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="inputDetails">
                    <p>Phone</p>
                    <input 
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setPhone',
                                payload: {
                                    phone: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="inputDetails">
                    <p>Country</p>
                    <input 
                        value={country}
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setCountry',
                                payload: {
                                    country: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="inputDetails">
                    <p>City</p>
                    <input 
                        value={city}
                        type="text"
                        className="w-full text-[0.9rem] bg-gray-300 px-4 py-3 rounded-md outline-none "
                        onChange={(e)=>{
                            dispatch({
                                type: 'setCity',
                                payload: {
                                    city: e.target.value
                                }
                            })
                        }}
                    />
                </div>
            </section>
        </div>
    )
}
