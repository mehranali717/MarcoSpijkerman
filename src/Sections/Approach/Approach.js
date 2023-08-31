import "./Approach.css";
import Image from "../../Components/Image/Image";
import LegoImage from "../../Assets/Images/lego-avator.png";
import Approaches from "../../Components/Approach/Approach";
const Approach = ({ approachData }) => {
	return (
		<section className="approach">
			<div className="container">
				<Image image={LegoImage} />
				<h2 className="sectionHeading">MY 3D APPROACH</h2>
				<div className="ApproachWrapper">
					{approachData.map((item) => {
						return <Approaches image={item.icon} title={item.title} />;
					})}
				</div>
			</div>
		</section>
	);
};
export default Approach;
