import "./WorkStates.css";
const WorkStates = ({ subTitle, stats }) => {
	// debugger;
	return (
		<div className="workStates">
			<h3 className="subTitle">{subTitle}</h3>
			<span className="tagline">This Year I...</span>
			<div className="workStatesInner">
				{stats.map((statsVal) => (
					<div className="wrapper">
						<span>{statsVal.value}</span>
					</div>
				))}
			</div>
		</div>
	);
};
export default WorkStates;
