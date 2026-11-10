import { useState } from "react"
function ContactForm(){
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMe: '',
    isAccess: true
})

 const [error, setError] = useState({
        name: '',
        email: '',
        message: '',
        contactMe: '',
        isAccess: '',
        phone: ''
})

function handleChange(event){
    const { name, value, type, checked } = event.target

    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }))

    
    setError(prev => ({
    ...prev,
     [name]: ''
}))
}

function handleSubmit(event){
    event.preventDefault();

    const newErrors = {
        name: '',
        email: '',
        message: '',
        contactMe: '',
        isAccess: '',
        phone: ''
    }

    if(!formData.name.trim()){
       newErrors.name = 'Name is required.'
    }

    if(!formData.email.trim()){
        newErrors.email = 'Email is required.'
    }

    setError(newErrors)

    if(newErrors.name || newErrors.email){
        return
    }

    setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: true
    })
}
return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-10 mb-10">
        <h2 className="text-2xl font-bakbak text-[#4C2304] mt-5">Contact Us</h2>
        <div className="flex flex-row items-start justify-center gap-8 w-full max-w-4xl">
           <div className="flex flex-col gap-4 w-1/2 mt-5">
                <input
                    className="rounded-3xl h-10 px-3 w-full bg-[#D3C6B1] text-[#4C2304]"
                    name="name"
                    type="text"
                    placeholder="Type your name"
                    value={formData.name}
                    onChange={handleChange}
                />
            
                {error.name && <p className="text-red-600">{error.name}</p>}
        
        
                <input
                    className="rounded-3xl h-10 px-3 w-full bg-[#D3C6B1] text-[#4C2304]"
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.email && <p className="text-red-600">{error.email}</p>}
            
        
                <input
                    className="rounded-3xl h-10 px-3 w-full bg-[#D3C6B1] text-[#4C2304]"
                    type="tel" id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="+374-xx-xx-xx-xx"
                    pattern="\+374-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                    onChange={handleChange}
                />
            
            
                <select
                    className=" rounded-3xl h-10 px-3 w-full bg-[#D3C6B1] text-[#4C2304]"
                    name="contactMe"
                    value={formData.conactMe}
                    onChange={handleChange}
                >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            
                <label className="flex items-center gap-2">
            
                    <input
                        type="checkbox"
                        name="isAccess"
                        onChange={handleChange}
                        checked={formData.isAccess}
                    />
        
                    Access ...
                </label>
        
                <button type="submit" className="bg-[#4C2304] text-[#D3C6B1] border rounded-xl h-10 hover:bg-[#D3C6B1] hover:text-white"> Submit </button>
            </div>
            <div className="w-1/2 mt-5">
                <textarea
                    name="message"
                    className="border border-[#55351d] rounded-2xl p-3 w-full h-30 mt-10 resize-y text-[#4C2304]"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" cols="50"
                />
            </div>
           </div>
    </form>
)
}

export default ContactForm