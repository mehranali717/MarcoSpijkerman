import Image from "../Image/Image";
import "./Thumbnail.css";
const Thumbnail = ({ image, title, workList }) => {
	return (
		<div className="works">
			<Image image={image} />
			<div className="tumbnailDetail">
				<h3 className="subTitle">{title}</h3>
				<ul className="workList">
					{workList.map((item) => (
						<li>{item.value}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default Thumbnail;
