import prismadb from "@/lib/db";
import ColorsClient from "./_components/ColorsClient";
import { ColorColumnsProps } from "./_components/ColorColumns";
import { format } from "date-fns";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumnsProps[] = colors.map(color => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM do,yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors}></ColorsClient>
      </div>
    </div>
  );
};
export default ColorsPage;
