import { BackLinkModel } from "./Models/BackLinkModel";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const BackLink: React.FC<BackLinkModel> = ({
  text = "Back",
  href,
  onClick,
}) => {
  return (
    <Link href={href} legacyBehavior>
      <a onClick={onClick} className="flex items-center space-x-2 text-primary">
        <BsArrowLeft />
        <span>{text}</span>
      </a>
    </Link>
  );
};

export default BackLink;
