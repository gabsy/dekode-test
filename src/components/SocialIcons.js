import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="/" title="Twitter">
                <FaTwitter size="18px"/>
            </a>
            <a href="/" title="Instagram">
                <FaInstagram size="18px"/>
            </a>
            <a href="/" title="Facebook">
                <FaFacebook size="18px"/>
            </a>
        </div>
    )
}

export default SocialIcons
