import "./Service.css";
import Image from "../Image/Image";
const Service = ({ icon, listItems, heading, backgroundColor }) => {
	return (
		<>
			<div className="service">
				<div
					className="iconWraper"
					style={{ backgroundColor: backgroundColor }}
				>
					<Image image={icon} />
				</div>
				<h3>{heading}</h3>
				<ul className="serviceList">
					{listItems.map((item) =><li>{item.item}</li>)}
				</ul>
			</div>
		</>
	);
};
export default Service;
