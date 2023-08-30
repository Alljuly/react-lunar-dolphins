import Input from "../form/Input";

import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.searchBar}>
      <Input
        type="text"
        name="search"
        placeholder="pesquise por titulo ou tipo"
      />
    </div>
  );
}

export default Search;
