import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4 w-full flex-wrap  `}>
      {clients.map((item) => (
        <div key={item.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={item.logo} alt="logo client" className="sm:w-[192px] w-[100px] object-containt" />
        </div>
      ))}
    </section>
  );
};

export default Client;
