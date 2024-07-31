import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon:<FaGithub />, path: 'https://github.com/dhruvtailor/' },
  { icon:<FaLinkedinIn />, path: 'https://www.linkedin.com/in/dhruv-tailor/' },
  { icon:<FaYoutube />, path: 'https://www.youtube.com/@dhruvtailor5878' },
  { icon:<FaXTwitter />, path: 'https://x.com/dhruvtailor96' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
};

export default Social;

