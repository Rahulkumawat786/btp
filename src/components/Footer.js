import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>Copyright © 2023</h4>
      <h6>
        Contact:
        <a href="mailto:bhunwalsitaram@gmail.com">bhunwalsitaram@gmail.com</a>
      </h6>
    </div>
  );
};
export default Footer;
