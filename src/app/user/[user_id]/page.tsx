"use client";
import UserProfile from "@/components/UserProfile/UserProfile";
import { useGitHubUser } from "@/hooks/useGitHubUser";

interface Params {
  params: { user_id: string };
}

export default function User({ params }: Params) {
  const user_id = params.user_id;
  const { user, error } = useGitHubUser(user_id);

  return (
    <div>
      {error && (
        <div className="error">
          <span>{error.message}</span>
          {error.status && <span>Код:{error.status}</span>}
        </div>
      )}
      {user ? <UserProfile user={user} /> : <></>}
    </div>
  );
}
