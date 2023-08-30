import Banner from "../../Sections/Banner/Banner";
import Header from "../../Sections/Header/Header";
import Services from "../../Sections/Services/Services";
import GraphicIcon from "../../Assets/Images/graphic-design.png";
import WebDesignIcon from "../../Assets/Images/web-design.png";
import WebDevelopmentIcon from "../../Assets/Images/web-development.png";
import WordPressIcon from "../../Assets/Images/wordpress.png";
import Spiderman from "../../Assets/Images/spiderman.png";
import EcomerceIcon from "../../Assets/Images/ecommerce.png";
import Testimonial from "../../Sections/Testimonial/Testimonial";
import WorkTabs from "../../Sections/WorkTabs/WorkTab";
const Marco = () => {
	const serviceData = [
		{
			icon: GraphicIcon,
			heading: "Graphic Design",
			backgroundColor: "#7a17a2",
		},
		{ icon: WebDesignIcon, heading: "Web Design", backgroundColor: "#ed6702" },
		{
			icon: WebDevelopmentIcon,
			heading: "Web Development",
			backgroundColor: "#cf5258",
		},
		{ icon: WordPressIcon, heading: "Wordpress", backgroundColor: "#289f5b" },
		{ icon: EcomerceIcon, heading: "Ecommerce", backgroundColor: "#266dff" },
	];
	return (
		<>
			<Header />
			<Banner />
			<Services serviceData={serviceData} />
			<Testimonial image={Spiderman} backgroundColor={"#e5471f"} />
			<WorkTabs />
		</>
	);
};
export default Marco;
