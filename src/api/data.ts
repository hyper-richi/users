import { UserItem } from "@/types/types";

export async function getUser(user_id: string): Promise<UserItem> {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(`https://api.github.com/user/${user_id}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    return res.json();
  } catch (error) {
    console.error("error: ", error);
    throw new Error(`Failed to fetch User data: ${error}`);
  }
}
