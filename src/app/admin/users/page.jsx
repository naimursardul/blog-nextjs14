import AdminAddUser from "@/components/AdminAddUser/AdminAddUser";
import styles from "./users.module.css";
import AdminAllUsers from "@/components/AdminAllUsers/AdminAllUsers";

export default function AdminUsers({ searchParams }) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>All Users</h1>
        <AdminAllUsers searchParams={searchParams} />
      </div>
      <div className={styles.section}>
        <h1>Add User</h1>
        <AdminAddUser />
      </div>
    </div>
  );
}
