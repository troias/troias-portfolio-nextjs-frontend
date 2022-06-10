
import { BsInstagram } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import PropTypes from 'prop-types';



const Footer = ({footer}) => {
   // console.log("FooterData", footer.data.codingDv.data.attributes.footer.footer_social_links);

   const socialLinks = footer.data.codingDv.data.attributes.footer.footer_social_links;



   return (
      <footer>

         <div className="">
            <div className="">
               <ul className="social-links flex justify-center mr-2 mb-6 ">
                  <li>  <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                      <BsInstagram  size={40}/>
                  </a>
                      </li>

                  <li> 
                     <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer">
                     <RiMessengerLine  size={40}/>
                     </a>
                     </li>
                  <li>
                     <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">
                      <FiTwitter   size={40}/>
                     </a>
                      
                      </li>
               </ul>
               <ul className="copyright">
                  <li>Design by <a title="Troy Flavell" href="">&copy; Troy Flavell</a></li>
               </ul>
            </div>
         </div>
      </footer>
   );
}

Footer.propTypes = {
   footer: PropTypes.object.isRequired,
   
}

export default Footer;