type RelevantCategory = {
  id: number;
  active: boolean;
  createdAt: string;
  image: string;
  name: string;
  parentId: number;
  updatedAt: string;
};

export default function CategoriesFilter({
  categories,
  search,
  ...rest
}: {
  categories: RelevantCategory[];
  search: (term: string) => void;
  [x: string]: any;
}) {
  return (
    <section className="w-full mb-8" {...rest}>
      <h2 className="text-lg font-semibold mb-4">Categorias relacionadas</h2>
      <ul>
        {categories?.map((item: RelevantCategory) => (
          <li key={item.id} className="mb-2">
            <button
              onClick={() => search(item.name)}
              className="link-primary cursor-pointer text-base font-medium hover:text-primary-500 transition-colors duration-200 ease-in"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
