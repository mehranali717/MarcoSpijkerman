import "./Logo.css";
const Logo = ({ logo }) => {
	return (
		<>
			<a href="#logo" className="logo">
				{logo}
			</a>
		</>
	);
};
export default Logo;
