import prismadb from "@/lib/db";
import { redirect } from "next/navigation";
import SettingForm from "./_components/SettingForm";
import { auth } from "@clerk/nextjs/server";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
const SettingsPage = async ({ params }: SettingsPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingForm initialData={store}></SettingForm>
      </div>
    </div>
  );
};
export default SettingsPage;
