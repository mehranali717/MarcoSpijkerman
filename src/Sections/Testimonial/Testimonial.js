import "./Testimonial.css";
const Testimonial = ({ image, backgroundColor }) => {
	return (
		<section
			className="testimonial"
			style={{ backgroundColor: backgroundColor }}
		>
			<div className="container">
				<img src={image} className="testimonialImg" alt="test"/>
				<p className="testimonialRow">
					A lot of times people don't know what they want until you show them.
				</p>
				<span className="authorName">steve jobs</span>
			</div>
		</section>
	);
};
export default Testimonial;
