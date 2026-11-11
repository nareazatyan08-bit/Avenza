import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'

function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
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
            email: '',
            password: ''
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Minimum 8 characters.'
        }
        setError(newErrors)

        if (Object.values(newErrors).some(error => error !== '')) {
            return
        }

        console.log(formData)

        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center px-4 py-12">
        <Header isSignIn={true} />
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-xl p-8 md:p-12 rounded-3xl shadow-xl flex flex-col gap-5"
            >

                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-[#4C2304]">
                        Sign In
                    </h2>

                    <p className="text-[#9A8068] mt-3">
                        Enter your account!
                    </p>
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
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F5EFE6] border border-[#D3C6B1] outline-none focus:border-[#4C2304]"
                    />

                    {error.password && (
                        <p className="text-red-600 text-sm">{error.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="h-12 bg-[#4C2304] text-white rounded-xl font-semibold hover:bg-[#70401C] transition mt-3"
                >
                    Sign in
                </button>

                <p className="text-center text-[#9A8068] text-sm">
                    Don't have an account?{' '}
                    <NavLink
                        to="/signup"
                        className="text-[#4C2304] font-bold hover:underline"
                    >
                        Sign Up
                    </NavLink>
                </p>

            </form>
        </div>
    )
}

export default SignIn
