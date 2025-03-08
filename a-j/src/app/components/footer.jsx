import Image from "next/image";
import instagramIcon from "@public/images/contact/instagram-icon.png";
import linkedinIcon from "@public/images/contact/linkedin-icon.png";
import mailIcon from "@public/images/contact/mail-icon.png";

console.log(instagramIcon);

export default function Footer() {
    return (
        <div className="h-1/9 flex flex-row gap-20 justify-center items-center p-4 pb-20">


            <a href="https://www.instagram.com/amjadjanjoun/"><Image
                width={80}
                height={80}
                src={instagramIcon}
                alt={"Instagram Link"}
                className="bg-white m-auto sm:w-15 transition-transform duration-300 hover:-translate-y-3">
            </Image></a>


            <a href="https://www.linkedin.com/in/amjad-janjoun-6151a128a/">
                <Image
                    width={80}
                    height={80}
                    src={linkedinIcon}
                    alt={"LinkedIn Link"}
                    className="bg-white m-auto sm:w-15 transition-transform duration-300 hover:-translate-y-3">
                </Image></a>


            <a href="mailto:amjadjanjoun5@gmail.com">
                <Image
                    width={80}
                    height={80}
                    src={mailIcon}
                    alt={"Mailing Link"}
                    className="bg-white m-auto sm:w-15 transition-transform duration-300 hover:-translate-y-3">
                </Image></a>

        </div>
    )
}