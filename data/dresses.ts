type Dress = {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  description: string;
};

const generateDresses = (
  category: string,
  total: number,
  basePath: string,
  baseName: string
) => {
  return Array.from({ length: total }, (_, i) => ({
    id: Number(`${category.length}${i + 1}`),
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} ${i + 1}`,
    slug: `${category}-${i + 1}`,
    category,
    image: `/imagens/${basePath}/${baseName}${i + 1}.jpeg`,
    description: "Modelo exclusivo Venute para momentos inesquecíveis.",
  }));
};

export const dresses: Dress[] = [
  ...generateDresses("casamento", 7, "casamento", "casamento"),
  ...generateDresses("debutantes", 8, "debutantes", "debutante"),
  ...generateDresses("madrinhas", 13, "madrinhas", "madrinhas"),
  ...generateDresses("festa", 3, "festa", "festa"),
  ...generateDresses("daminhas", 2, "daminhas", "daminhas"),
];