import { dresses } from "@/data/dresses";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const produto = dresses.find((dress) => dress.slug === slug);

  if (!produto) {
    return <div className="p-20">Produto não encontrado.</div>;
  }

  return (
    <div className="min-h-screen px-8 py-24 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <img
            src={produto.image}
            alt={produto.name}
            className="w-full h-[700px] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl mb-6">{produto.name}</h1>

          <p className="text-gray-600 mb-10">
            {produto.description}
          </p>

          <button className="bg-black text-white px-8 py-3 hover:bg-neutral-800 transition">
            Falar no WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}