import prismadb from "@/lib/db";
import BillboardClient from "./_components/BillboardClient";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards}></BillboardClient>
      </div>
    </div>
  );
};
export default BillboardsPage;
