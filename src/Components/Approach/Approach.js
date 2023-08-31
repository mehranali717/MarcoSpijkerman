import Image from "../Image/Image";
import "./Approach.css";
const Approach = ({ image, title }) => {
	return (
		<div className="Approach">
			<div className="iconWraper">
				<Image image={image} />
			</div>
			<h3 className="subTitle">{title}</h3>
			<p className="approachDetail">
				converting an idea in write type of design is a special skill of mine.
				I've created my own idea to design process to develope eye-catching,
				stylish and modern designs.
			</p>
		</div>
	);
};
export default Approach;
