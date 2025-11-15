// import { notFound } from "next/navigation";
import { getUser } from "@/api/data";
import UserProfile from "@/components/UserProfile/UserProfile";

interface Params {
  params: { user_id: string };
}

export default async function User({ params }: Params) {
  const user_id = params.user_id;

  const user = await getUser(user_id);

  if (!user) {
    // notFound();
  }

  return <UserProfile user={user} />;
}
