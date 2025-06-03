// utils/logout.tsx
import { account } from "../appwrite";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLogout = async (
  router: AppRouterInstance
): Promise<void> => {
  try {
    await account.deleteSession("current");
    alert("Logged out successfully!");
    router.push("/login");
  } catch (error: any) {
    console.error("Logout error:", error.message);
  }
};
