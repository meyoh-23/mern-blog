import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTiktok, BsTwitch, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterContainer = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className="mt-5">
                        <Link to="/"
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                            >
                                <span
                                className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '
                                >Me's
                                </span>
                                Blog
                            </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About'/>
                            <Footer.LinkGroup col>
                                <Footer.Link
                                href='https://www.100jsprojects.com'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    100 JS Projects
                                </Footer.Link>
                                <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    About
                                </Footer.Link>
                                <Footer.Link
                                href='/projects'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Projects
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us'/>
                            <Footer.LinkGroup col>
                                <Footer.Link
                                href='https://github.com/meyoh-23'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Discord
                                </Footer.Link>
                                <Footer.Link
                                href='https://twitter.com/FelixMeyoh'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    X
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Copmliance'/>
                            <Footer.LinkGroup col>
                                <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Terms & Conditions
                                </Footer.Link>
                                <Footer.Link
                                href='#'
                                target='_blank'
                                rel='noopener norefer'
                                >
                                    Support
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright 
                    href='#' 
                    by="Me's Blog" 
                    year={new Date().getFullYear()}/>
                    <div className='flex gap-6 mt-4 sm:mt-0 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsTwitter}/>
                        <Footer.Icon href='#' icon={BsTiktok}/>
                        <Footer.Icon href='#' icon={BsTwitch}/>
                    </div>
                </div>
                
            </div>
        </Footer>
    )
}

export default FooterContainer;