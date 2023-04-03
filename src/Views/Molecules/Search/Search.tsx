import { TextInput } from "@/Views/Molecules";
import { IconButton, Box } from "@/Views/Atoms";

import styles from "@/styles/global.module.scss";

const Search: React.FC = () => {
  return (
    <Box className={`flex items-center ${styles["hide-from-mobile"]} `}>
      <TextInput
        placeholder="Search for anything"
        className="border-l-1 border-t-1 border-b-1 border-r-0 w-96"
      />
      <IconButton
        variant="contained"
        name="AiOutlineSearch"
        type="ai"
        size="sm"
        color="white"
        padding="py-2 px-5"
        className="bg-accent rounded-r-2"
      />
    </Box>
  );
};

export default Search;
