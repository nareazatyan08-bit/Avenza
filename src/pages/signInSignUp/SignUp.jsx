import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'

function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        setError(prev => ({
            ...prev,
            [name]: ''
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Minimum 8 characters.'
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm your password.'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.'
        }

        setError(newErrors)

        if (Object.values(newErrors).some(error => error !== '')) {
            return
        }

        console.log(formData)

        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        
        <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center px-4 py-5">
            <Header isSignUp={true} />
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-xl p-8 md:p-12 rounded-3xl shadow-xl flex flex-col gap-5"
            >

                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-[#4C2304]">
                        Sign Up
                    </h2>

                    <p className="text-[#9A8068] mt-3">
                        Create account and get started!
                    </p>
                </div>

               
                <div className="flex flex-col gap-2">
                    <label className="text-[#4C2304] font-semibold">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F5EFE6] border border-[#D3C6B1] outline-none focus:border-[#4C2304]"
                    />

                    {error.name && (
                        <p className="text-red-600 text-sm">{error.name}</p>
                    )}
                </div>

                
                <div className="flex flex-col gap-2">
                    <label className="text-[#4C2304] font-semibold">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F5EFE6] border border-[#D3C6B1] outline-none focus:border-[#4C2304]"
                    />

                    {error.email && (
                        <p className="text-red-600 text-sm">{error.email}</p>
                    )}
                </div>

                
                <div className="flex flex-col gap-2">
                    <label className="text-[#4C2304] font-semibold">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F5EFE6] border border-[#D3C6B1] outline-none focus:border-[#4C2304]"
                    />

                    {error.password && (
                        <p className="text-red-600 text-sm">{error.password}</p>
                    )}
                </div>

                
                <div className="flex flex-col gap-2">
                    <label className="text-[#4C2304] font-semibold">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F5EFE6] border border-[#D3C6B1] outline-none focus:border-[#4C2304]"
                    />

                    {error.confirmPassword && (
                        <p className="text-red-600 text-sm">
                            {error.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="h-12 bg-[#4C2304] text-white rounded-xl font-semibold hover:bg-[#70401C] transition mt-3"
                >
                    Create Account
                </button>

                <p className="text-center text-[#9A8068] text-sm">
                    Already have an account?{' '}
                    <NavLink
                        to="/signin"
                        className="text-[#4C2304] font-bold cursor-pointer hover:underline"
                    >
                        Sign in
                    </NavLink>
                </p>

            </form>
        </div>
    )
}

export default SignUp
