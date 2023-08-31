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
		{ value: 50000 },
		{ value: 50000 },
		{ value: 50000 },
		{ value: 50000 },
	];
	const workStatsData = [
		{ subTitle: "PROFESSIONAL", stats: stats },
		{ subTitle: "PERSONEL", stats: stats },
	];
	return (
		<>
			<Header /> {/*1 */}
			<Banner /> {/*1 */}
			<Services serviceData={serviceData} /> {/*2 */}
			<Testimonial image={Spiderman} backgroundColor={"#e5471f"} /> {/*1 */}
			<WorkTabs workTabData={workTabData} /> {/*3 */}
			<Approach approachData={approachData} /> {/*2 */}
			<WorkStates statsData={workStatsData} /> {/*2 */}
			<Footer /> {/*0 */}
		</>
	);
};
export default Marco;
