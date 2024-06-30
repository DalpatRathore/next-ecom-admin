import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/MainNav";
import StoreSwitcher from "@/components/StoreSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/db";
import { ThemeToggle } from "./ThemeToggle";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores}></StoreSwitcher>
        <MainNav className="mx-6" />
        <div className=" mr-4 ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>

        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};
export default Navbar;
