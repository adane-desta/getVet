import FarmerHeader from "../farmerDasboard/farmerNav/fheader";
import styles from "./Resource.module.css";
import ResourceItem from "./ResourseItem";
import useResource from "./useResource";

function ResourcePage() {

  const resources = useResource()

  return (
    <>
      <FarmerHeader />

      <header className={styles.header}>
        <h1>Animal Health resource</h1>
        <p>disease protection And Prevention</p>
      </header>

      <ResourceItem resources={resources} />

    </>
  );
}

export default ResourcePage;
