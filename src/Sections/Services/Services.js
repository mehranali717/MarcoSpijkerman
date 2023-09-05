import Button from "../../Components/Button/Button";
import Service from "../../Components/Service/Service";
import "./Services.css";
const Services = ({ serviceData  }) => {
	return (<>
		<h2 className="sectionHeading">THINGS THAT I DO (QUITE WELL)</h2>
		<div className="servicesWrapper">
			{serviceData.map((data) => {
				return (
					<Service
						icon={data.icon}
						heading={data.heading}
						backgroundColor={data.backgroundColor}
						listItems={data.servicesListItems}
					/>
				);
			})}
		</div>
		<Button btnTitle={"View all my Services"} />
		</>
	);
};
export default Services;
