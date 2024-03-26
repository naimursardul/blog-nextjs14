import styles from "./admin.module.css";
import AdminLinks from "@/components/AdminLinks/AdminLinks";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.admin_layout}>
      <AdminLinks />
      {children}
    </div>
  );
}
