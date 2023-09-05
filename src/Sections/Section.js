
const Section = ({ children ,sectionClassName, containerClassName }) => {
	
	return (
		<section className={sectionClassName}>
			<div className={containerClassName}>
				{children}
				</div>
		</section>
	);
};
export default Section;
