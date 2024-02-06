import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-screen mt-20">
            <div>
                <div className="">
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
                <div>
                right side
                </div>
            </div>
        </div>
    )
}

export default Signup;