import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { BiSolidHide, BiSolidShow} from "react-icons/bi";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // toggle showing and hiding password
    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };

    // track form input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
        /* console.log(formData); */
    }
    
    // submit to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !formData.email || !formData.password) {
            return setErrorMessage("Please fill out all fields!");
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            if (data.success === false) {
                /* setLoading(false); */
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if (res.ok){
                navigate('/');
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message);
            
        }
    }

    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/* left */}
                <div className="flex-1">
                    <Link to="/"
                        className='self-center text-lg  font-semibold dark:text-white'
                    >
                        <span
                        className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '
                        // eslint-disable-next-line react/no-unescaped-entities
                        >Me's
                        </span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officia unde aliquid, totam dignissimos molestias soluta pariatur,
                    </p>
                </div>
                <div className="flex-1">
                {/* right side */}
                    <div className="">
                        <form className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                        >
                        <div>
                            <Label value="Your email"/>
                            <TextInput
                            type="email"
                            placeholder="name@company.com"
                            id="email" onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <Label value="Your password"/>
                            <TextInput
                            type={showPassword? "text" : "password"}
                            placeholder="Password"
                            id="password" onChange={handleChange}
                            />
                            <button 
                            className="absolute right-0 top-0"
                            onClick={togglePassword}
                            >
                                {showPassword? <BiSolidShow size={25}/> : <BiSolidHide size={25}/>}
                            </button>
                        </div>
                        <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                            {
                                loading? (
                                    <>
                                        <Spinner size="sm"/>
                                        <span className="pl-3">Loading</span>
                                    </>
                                    
                                    ) : "Signin"
                            }
                        </Button>
                        </form>
                        <div className="flex gap-2 text-sm mt-5">
                            <span>
                                Have an account?
                            </span>
                            <Link to='/sign-up' className="text-blue-500">
                                Signup
                            </Link>
                        </div>
                        {
                            errorMessage && (
                                <Alert className="mt-5" color="failure">
                                    {errorMessage}
                                </Alert>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;