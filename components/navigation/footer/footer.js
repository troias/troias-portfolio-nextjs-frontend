
import { BsInstagram } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';



const Footer = () => {

   return (
      <footer>

         <div className="">
            <div className="">
               <ul className="social-links flex justify-center mr-2 mb-6 ">
                  <li>   <BsInstagram /></li>
                  <li> <RiMessengerLine /></li>
                  <li> <FiTwitter /></li>
               </ul>
               <ul className="copyright">
                  <li>Design by <a title="Troy Flavell" href="">&copy; Troy Flavell</a></li>
               </ul>
            </div>
         </div>
      </footer>
   );
}


export default Footer;