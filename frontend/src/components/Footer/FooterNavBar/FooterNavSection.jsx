import { Link } from "react-router-dom";

const FooterNavSection = ({ section }) => {
  return (
    <div>
      <h3>{section.category}</h3>
      <ul>
        {section.links.map((link) => (
          <li key={link.title}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavSection;
