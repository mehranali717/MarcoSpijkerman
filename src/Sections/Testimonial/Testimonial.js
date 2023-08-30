import Image from "../../Components/Image/Image";
import "./Testimonial.css";
const Testimonial = ({ image, backgroundColor }) => {
	return (
		<>
			<div className="testimonial" style={{ backgroundColor: backgroundColor }}>
				<div className="container">
					<img src={image} className="testimonialImg" />
					<p className="testimonialRow">
						A lot of times people don't know what they want until you show them.
					</p>
					<span className="authorName">steve jobs</span>
				</div>
			</div>
			;
		</>
	);
};
export default Testimonial;
