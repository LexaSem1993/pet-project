import React from "react";
import { UserItem } from "../../components/UserItem";
import { useGetUsersListQuery } from "../../src/store/usersApi";

export const Users = () => {
  const { data: users, isLoading } = useGetUsersListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="users">
      {users?.map((item) => (
        <UserItem user={item} key={item.id} />
      ))}
    </div>
  );
};
