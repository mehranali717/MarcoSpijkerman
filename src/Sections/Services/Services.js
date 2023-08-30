import Button from "../../Components/Button/Button";
import Service from "../../Components/Service/Service";
import "./Services.css";
const Services = ({ serviceData }) => {
	const servicesListItems = [
		{ item: "Logo Design" },
		{ item: "UI/UX Design" },
		{ item: "Print Design" },
		{ item: "Branding" },
	];
	const buttonTxt = "View all my Services";
	return (
		<>
			<section className="services">
				<div className="container">
					<h2 className="sectionHeading">THINGS THAT I DO (QUITE WELL)</h2>
					<div className="servicesWrapper">
						{serviceData.map((data) => {
							return (
								<Service
									icon={data.icon}
									heading={data.heading}
									backgroundColor={data.backgroundColor}
									listItems={servicesListItems}
								/>
							);
						})}
					</div>
					<Button buttontxt={buttonTxt} />
				</div>
			</section>
		</>
	);
};
export default Services;
