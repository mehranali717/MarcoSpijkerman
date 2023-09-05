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
import ThumbnailImg from "../../Assets/Images/thumbnail-img.png";
import Approach from "../../Sections/Approach/Approach";
import ApproachIcon1 from "../../Assets/Images/approach-icon-one.png";
import ApproachIcon2 from "../../Assets/Images/approach-icon-two.png";
import ApproachIcon3 from "../../Assets/Images/approach-icon-three.png";
import WorkStates from "../../Sections/WorkStates/WorkStates";
import Footer from "../../Sections/Footer/Footer";
import Section from "../../Sections/Section";
const Marco = () => {
	const servicesListItems = [
		{ item: "Logo Design" },
		{ item: "UI/UX Design" },
		{ item: "Print Design" },
		{ item: "Branding" },
	];
	const serviceData = [
		{
			icon: GraphicIcon,
			heading: "Graphic Design",
			backgroundColor: "#7a17a2",
			servicesListItems:servicesListItems
		},
		{ icon: WebDesignIcon, heading: "Web Design", backgroundColor: "#ed6702" ,servicesListItems:servicesListItems},
		{
			icon: WebDevelopmentIcon,
			heading: "Web Development",
			backgroundColor: "#cf5258",
			servicesListItems:servicesListItems
		},
		{ icon: WordPressIcon, heading: "Wordpress", backgroundColor: "#289f5b",servicesListItems:servicesListItems },
		{ icon: EcomerceIcon, heading: "Ecommerce", backgroundColor: "#266dff" ,servicesListItems:servicesListItems},
	];
	const workList = [
		{ value: "Code Igniter" },
		{ value: "HTML & CSS" },
		{ value: "Rebranding" },
	];
	const workTabData = [
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
		{
			image: ThumbnailImg,
			title: "Clinuvel Brochure Design",
			workList: workList,
		},
	];
	const approachData = [
		{ icon: ApproachIcon1, title: "Design" },
		{ icon: ApproachIcon2, title: "Develop" },
		{ icon: ApproachIcon3, title: "Deploy" },
	];
	const stats = [
		{ value: 50000 },
		{ value: 45000 },
		{ value: 35000 },
		{ value: 65000 },
		{ value: 37000 },
	];
	const workStatsData = [
		{ subTitle: "PROFESSIONAL", stats: stats },
		{ subTitle: "PERSONEL", stats: stats },
	];
	return (
		<>
			<Header /> {/*1 */}
			<Banner /> {/*1 */}
			<Section sectionClassName="services" containerClassName="container" children={<Services serviceData={serviceData}/>}>
			</Section>
			{/* <Services> 2 */}
			<Testimonial image={Spiderman} backgroundColor={"#e5471f"} /> {/*1 */}
			<WorkTabs workTabData={workTabData} /> {/*3 */}
			 {/*2 */}
			<WorkStates statsData={workStatsData} /> {/*2 */}
			<Footer /> {/*0 */}
		</>
	);
};
export default Marco;
