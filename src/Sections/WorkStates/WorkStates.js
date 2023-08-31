import "./WorkStates.css";
import WorkStatesComponent from "../../Components/WorkStates/WorkStates";
const WorkStates = ({ statsData }) => {
	return (
		<section className="workStates">
			<div className="container">
				<h2 className="sectionHeading">MY BUILDING BLOCKS</h2>
				<div className="workStateInner">
					{statsData.map((item) => {
						return (
							<WorkStatesComponent
								subTitle={item.subTitle}
								stats={item.stats}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default WorkStates;
