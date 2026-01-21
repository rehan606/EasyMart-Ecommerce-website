
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import ProductCard from "../../Components/ProductCard/ProductCard";

const CategoryProducts = () => {
    const { slug } = useParams(); // clothes, electronics

    const { products} = useData();

    let filteredProducts = products?.filter(product => product.category === slug);



    return (
        <div className="container mx-auto px-4 md:px-10 py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 capitalize">
                <span className='textColor1'>{slug}</span>  Products
            </h2>

            {filteredProducts.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border border-zinc-200 p-4 rounded-lg">
                {filteredProducts.map(product => (
                    <ProductCard product={product} />
                ))}
                </div>
            )}
        </div>
    );
};

export default CategoryProducts;
