import React, { Suspense } from "react";
import UserTable from "./new/UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}></Suspense>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
