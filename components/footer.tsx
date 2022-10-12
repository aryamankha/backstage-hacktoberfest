import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
        <footer id="footer" className=' border-t-2 border-purple-500'>
            <div className="container grid mx-auto px-10 sm:px-20 w-full">
            <div className="sm:grid grid-cols-6 w-full">
                <div className="sm:col-span-4 footerHeadingCol my-5">
                <h2 className=" font-extrabold text-4xl text-white">Backstage</h2>

                </div>

                <div className="sm:col-span-2 justify-start sm:justify-end flex gap-8 sm:mr-10 my-5">
                <a href="#" className=" text-4xl">
                    <span><BsFacebook /></span></a>
                <a href="#" className=" text-4xl">
                    <span><AiFillTwitterCircle /></span></a>
                <a href="#" className=" text-4xl">
                    <span><AiFillInstagram /></span></a>
                <a href="#"  className=" text-4xl">
                    <span><AiFillLinkedin /></span></a>
                </div>
            </div>


            <div className="row contactRow my-5">
                <p className='flex gap-6'>
                <a className="footer_clickable text-purple-500 font-bold text-lg" href="#">Policies</a> |
                <a className="footer_clickable text-purple-500 font-bold text-lg" href="#">Terms of Service</a> |
                <a className="footer_clickable text-purple-500 font-bold text-lg" href="#">Contact Us</a>

                </p>
            </div>

            <div className="row text-lg">
                <p className="copyright">&copy; Copyright 2022 Backstage All rights reserved.</p>
            </div>
            </div>
        </footer>

    </div>
  );
}
