import Image from "next/image";
import styles from "./AdminAllUsers.module.css";
import { deleteUser, getPageUsers } from "@/lib/action";
import { MdAdminPanelSettings } from "react-icons/md";
import Pagination from "../Pagination/Pagination";

export default async function AdminAllUsers({ searchParams }) {
  console.log(searchParams);
  let page = parseInt(searchParams?.page, 10);
  console.log(page);
  page = !page || page < 1 ? 1 : page;

  const paginationConfig = {
    perPage: 5,
    pageUrl: "/admin/users?page=",
    offsetNumber: 3,
    page,
  };

  const data = await getPageUsers(page, paginationConfig.perPage);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {data?.users.map((user) => (
          <div className={styles.user} key={user?._id}>
            <div className={styles.details}>
              <Image
                src={user?.img || "/noavatar.png"}
                alt=""
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
              <div className={styles.user_info}>
                <b>{user?.username}</b>
                {user?.isAdmin && <MdAdminPanelSettings />}
              </div>
            </div>
            <div className={styles.form_container}>
              <form>
                <input type="hidden" name="isAdmin" value={!user?.isAdmin} />
                <button
                  style={
                    user?.isAdmin
                      ? { backgroundColor: "#7b1434" }
                      : { backgroundColor: "var(--btn)" }
                  }
                  className={styles.admin_btn}
                >
                  {user?.isAdmin ? "× Admin" : "+ Admin"}
                </button>
              </form>
              <form action={deleteUser} className={styles.formContainer}>
                <input type="hidden" name="id" value={user?._id} />
                <button className={styles.btn}>Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>

      <Pagination paginationConfig={paginationConfig} />
    </div>
  );
}
