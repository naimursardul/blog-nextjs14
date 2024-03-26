import styles from "./Pagination.module.css";
import Link from "next/link";
import { getPagePost } from "@/lib/action";

export default async function Pagination({ paginationConfig }) {
  const { page, perPage, pageUrl, offsetNumber } = paginationConfig;
  const data = await getPagePost(page, perPage);
  const totalPage = Math.ceil(data.totalItems / perPage);
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPage ? page + 1 : totalPage;

  // Offset Number
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    if (page !== totalPage && page < offsetNumber && i <= offsetNumber)
      pageNumbers.push(i);
    if (page === totalPage && i > totalPage - offsetNumber) pageNumbers.push(i);
    if (
      page !== totalPage &&
      page >= offsetNumber &&
      i >= page + 1 - offsetNumber + 1 &&
      i <= page + 1 &&
      i <= totalPage
    ) {
      pageNumbers.push(i);
    }
  }
  console.log(pageNumbers);

  return (
    <div className={styles.container}>
      {page <= 1 ? (
        <div style={{ opacity: ".4" }}>Prev</div>
      ) : (
        <Link href={`${pageUrl}${prevPage}`}>Prev</Link>
      )}
      {pageNumbers?.map((pageNumb, index) => (
        <Link
          href={`${pageUrl}${pageNumb}`}
          className={page === pageNumb ? styles.active : ""}
          key={index}
        >
          {pageNumb}
        </Link>
      ))}
      {page >= totalPage ? (
        <div style={{ opacity: ".4" }}>Next</div>
      ) : (
        <Link href={`${pageUrl}${nextPage}`}>Next</Link>
      )}
    </div>
  );
}
