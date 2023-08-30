import "./Banner.css";
import Lego from "../../Assets/Images/avator-image.png";
import Image from "../../Components/Image/Image";
const Banner = () => {
	return (
		<>
			<div className="banner">
				<div className="container">
					<h1 className="defaultHeading">Hey I'm Marco Spijkerman</h1>
					<span>
						I'm Toronto based Web Developer with Awesome Design Chops...
					</span>
					<span>I've been Building Websites since Yahoo! was still Cool!</span>
				</div>
				<Image image={Lego} />
			</div>
		</>
	);
};
export default Banner;
