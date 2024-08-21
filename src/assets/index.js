import fintechAnimation from '../assets/images/fintechanimation.json'
import webdevanimation from '../assets/images/webdevanimation.json'
import cyberanimation from '../assets/images/cyberanimation.json'
import webAnimationMainPage from '../assets/images/webdevAnimationMainPage.json'
import fintechAnimationMainPage from '../assets/images/fintechAnimationMainPage.json'
import cyberAnimationMainPage from '../assets/images/cyberAnimationMainPage.json'

export const navLinks = ["services", "products", "about", "contact"]

export const aboutServices = [
    {
        title: "Fintech",
        description: "Transform your financial services with cutting-edge fintech applications. Our expert development team leverages the latest technologies to create innovative and secure solutions, ensuring seamless transactions and enhanced user experiences.",
        image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Web Development",
        description: "Elevate your online presence with our bespoke web development services. From responsive and user-friendly websites to complex web applications, we specialize in crafting digital solutions tailored to meet your unique business needs.",
        image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Cyber Security",
        description: "At MD Studios, we excel in Cyber Security with a focus on Zero Trust measures. Our specialized solutions fortify organizations against evolving threats, ensuring robust protection for digital assets. Trust us to secure your business with cutting-edge strategies.",
        image: "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

export const whatwedo = [
    {
        title: "Talent Development",
        description: "At MD Studios, we believe in nurturing the next generation of visionaries. Our talent development program is designed to cultivate creativity, ignite passion, and inspire innovation. From interns to seasoned professionals, we provide opportunities for growth and learning.",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/Talent+Development.jpg"
    },
    {
        title: "Interactive Strategies",
        description: "At MD Studios, we specialize in crafting interactive strategies that captivate audiences and drive results. From immersive experiences to dynamic campaigns, we leverage the latest technologies to engage users on every level. Our approach is rooted in innovation, combining creativity with strategic thinking to deliver impactful solutions.",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/Interactive+Strategies.jpg"
    },
    {
        title: "Values",
        description: "At MD Studios, our values are more than just words – they're the guiding principles behind everything we do. Integrity, innovation, and collaboration are at the heart of our culture, driving us to push boundaries and exceed expectations. We believe in transparency, accountability, and respect, fostering a culture of trust and empowerment.",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/Values.jpg"
    },
    {
        title: "Viable Mindset",
        description: "At MD Studios, we understand that success isn't just about talent or resources; it's about mindset. That's why we're dedicated to cultivating a viable mindset that empowers visionaries to thrive. Through a culture of adaptability, resilience, and innovation, we equip individuals with the tools they need to navigate challenges and seize opportunities. ",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/Viable+Mindset.jpg"
    }
]

export const teams = [
    {
        title: "MDS Operations Team",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/operationsteam.png",
        description: "Our Operations Team is the heartbeat of MDS, ensuring smooth and efficient execution of all our business activities. We streamline processes, maintain quality control, manage resources effectively, and drive continuous improvement. With a focus on operational excellence, our team guarantees that MDS consistently delivers top-tier results. Committed to precision and reliability, the Operations Team is dedicated to optimizing performance and supporting our growth."
    },
    {
        title: "MDS Information Technology",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/information+techcnology-1.png",
        description: "The MDS Information Technology team is at the forefront of technological innovation, providing robust IT infrastructure and advanced systems. We prioritize cybersecurity, deploy cutting-edge solutions, and offer dedicated tech support. Our focus on continuous innovation ensures MDS stays ahead in the digital landscape. By safeguarding data and developing custom tech solutions, our IT team empowers the entire organization to achieve excellence."
    },
    {
        title: "Client Development",
        image: "https://mdstudios.s3.ap-south-1.amazonaws.com/clinet-development.png",
        description: "At MDS, our clients are our top priority. The Client Development team builds strong, lasting relationships by understanding unique client needs and offering tailored solutions. We work as strategic partners, engaging proactively and providing exceptional service. Our commitment to client success drives us to deliver unparalleled support, ensuring that our clients thrive and achieve their goals with MDS by their side."
    }
]

export const animations = [fintechAnimation, webdevanimation, cyberanimation]

export const ServicesMainPages = {
    fintech: {
        title: "Fintech",
        animation: fintechAnimationMainPage,
        description: "Transform your financial services with our innovative FinTech solutions. We develop comprehensive banking solutions, digital currency platforms, cryptocurrency applications, and cutting-edge payment gateways. Our expertise in neo banking ensures that you stay ahead of the curve in the ever-evolving financial landscape.",
        tagline: "Empowering Finance, Transforming Futures"
    },
    webdevelopment: {
        title: "Web Development",
        animation: webAnimationMainPage,
        description: "Empower your online presence with our top-notch web development services. From stunning websites to dynamic web applications, we deliver tailored solutions that captivate your audience and drive results. Let us turn your ideas into reality in the digital realm.",
        tagline: "Elevating Your Online Presence, One Pixel at a Time"
    },
    cybersecurity: {
        title: "Cyber Security",
        animation: cyberAnimationMainPage,
        description: "Protect your organization with our top-tier cybersecurity services. We specialize in custom security solutions, implementing a zero-trust strategy and conducting regular penetration testing to ensure your network and applications are secure. In an increasingly connected world, our experts work tirelessly to identify and address vulnerabilities, keeping your business safe and secure.",
        tagline: "Protecting Your Digital Frontier, Securing Your Peace of Mind"
    },
    socialmediamarketing: {
        title: "Social Media Marketing",
        animation: webAnimationMainPage,
        description: "Maximize your online presence with our state-of-the-art social media marketing services. We leverage the latest AI technologies and cutting-edge marketing strategies to boost your brand's visibility and engagement across all social media platforms. From content creation to targeted ad campaigns, we provide comprehensive solutions tailored to your needs.",
        tagline: "Connecting Brands, Amplifying Voices, Igniting Engagement"
    },
    
};

export const mainAnimations = [fintechAnimationMainPage, webAnimationMainPage, cyberAnimationMainPage]
import olivia from './images/olivia.svg'
import olin from './images/olin.png'
import culinary from './images/cilinary.jpg'

export const products = [
    {
        id: 0,
        title: "Olivia Token",
        image: olivia,
        color: "white",
        text: "white"
    },
    {
        id: 1,
        title: "Culinary Artist",
        image: culinary,
        color: "white",
        text: "white"
    },
    {
        id: 2,
        title: "Olin Token",
        image: olin,
        color: "white",
        text: "white"
    },
    {
        id: 3,
        title: "GameFi",
        image: "https://static.vecteezy.com/system/resources/previews/027/445/546/non_2x/gamefi-blockchain-games-icon-vector.jpg",
        color: "white",
        text: "white"
    },
]