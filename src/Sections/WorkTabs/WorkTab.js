import Button from "../../Components/Button/Button";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import "./WorkTab.css";
const WorkTabs = ({ workTabData }) => {
	return (
		<section className="workTabs">
			<div className="container">
				<h2 className="sectionHeading">WORK YOU'LL LOVE</h2>
				<div className="buttonWrapper">
					<Button btnTitle={"Agencies"} />
					<Button btnTitle={"Projects"} />
				</div>
				<div className="thumbnailWrapper">
					{workTabData.map((thumbnail) => {
						return (
							<Thumbnail
								image={thumbnail.image}
								title={thumbnail.title}
								workList={thumbnail.workList}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default WorkTabs;
