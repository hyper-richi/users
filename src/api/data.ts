import { UserItem } from "@/types/types";

export async function getUser(user_id: string): Promise<UserItem> {
  try {
    const res = await fetch(`https://api.github.com/user/${user_id}`, {
      cache: "no-store",
    });
    console.log("res: ", res);

    return res.json();
  } catch (error) {
    throw new Error(`Failed to fetch User data: ${error}`);
  }
}
