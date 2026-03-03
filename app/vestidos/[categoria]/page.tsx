import { dresses } from "@/data/dresses";
import ProductCard from "@/components/ProductCard";

type Props = {
  params: Promise<{ categoria: string }>;
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;

  const vestidosFiltrados = dresses.filter(
    (dress) => dress.category === categoria
  );

  return (
    <div className="px-8 py-24 bg-white min-h-screen">
      <h1 className="text-4xl text-center mb-16 tracking-wider capitalize">
        {categoria}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {vestidosFiltrados.map((dress) => (
          <ProductCard key={dress.id} dress={dress} />
        ))}
      </div>
    </div>
  );
}