import prismadb from "@/lib/db";

interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className="bg-emerald-500">
      Active Store: <strong>{store?.name}</strong>
    </div>
  );
};
export default DashboardPage;
