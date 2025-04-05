import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Materail = ({icon,isHighlight,link}) => {
  return (
    <a
        className={`${isHighlight ? 'text-primarySubTitle' : 'text-primaryContent'}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <FontAwesomeIcon
            icon={icon}
            className={` text-lg hover:scale-125 transition-all`}
        />
    </a>
)
}
export default Materail