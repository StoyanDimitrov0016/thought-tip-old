import { Link } from "react-router-dom";

const FooterNavSection = ({ section }) => {
  return (
    <div>
      <h3>{section.category}</h3>
      <ul>
        {section.paths.map((path) => (
          <li key={path.title}>
            <Link to={path.path}>{path.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavSection;
