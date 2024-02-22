import prismadb from "@/lib/db";
import { CategoryColumnsProps } from "./_components/CategoryColumns";
import { format } from "date-fns";
import CategoryClient from "./_components/CategoryClient";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumnsProps[] = categories.map(
    category => ({
      id: category.id,
      name: category.name,
      billboardLabel: category.billboard.label,
      createdAt: format(category.createdAt, "MMMM do,yyyy"),
    })
  );
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories}></CategoryClient>
      </div>
    </div>
  );
};
export default CategoriesPage;
