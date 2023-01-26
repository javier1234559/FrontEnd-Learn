import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`flex flex-col md:flex-row w-full mb-10`}>
          <div className="flex flex-col flex-1 sm:mr-10 ">
            <img src={logo} alt="logo" className="w-[250px] h-[70px] object-contain " />
            <p className={`${styles.paragraph} max-w-[350px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className="flex pt-8 md:pt-0 flex-[1.5] justify-between ">
            {footerLinks.map((item,link) =>(
              <div key={item.title} className="flex flex-col">
                  <h4 className="font-poppins text-white text-[18px] font-medium leading-[27px]">{item.title}</h4>
                  <ul className="">
                  {item.links.map(a =>(
                    <li key={a.name} className="text-dimWhite font-poppins mt-4">
                      <a href={a.link}>{a.name}</a>
                    </li>
                  ))}
                  </ul>
              </div>
            ))}
          </div>
      </div>
      <div className="flex w-full justify-between py-8 border-t-[#3F3E45] items-center md:flex-row flex-col pt-6 border-t-[1px]">
        <h1 className="text-white  font-poppins font-normal text-[18px]">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</h1>
        <div className="flex pt-4 md:pt-0 ">
          {socialMedia.map(icon =>(
              <img key={icon.id} src={icon.icon} alt="social media icon" className="w-[20px] h-[20px] object-contain cursor-pointer ml-6"
                onClick={()=> window.open(icon.link)}
              />
          ))}
        </div>         
      </div>
    </footer>
  )
}

export default Footer