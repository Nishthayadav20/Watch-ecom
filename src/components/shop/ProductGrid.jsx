import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((watch) => (
        <ProductCard
          key={watch.id}
          watch={watch}
        />
      ))}
    </div>
  );
};

export default ProductGrid;