import { Link } from "react-router-dom";
import useData from "../../Hooks/useData"


const Category = () => {

    const {categories} = useData();

    return (
        <section className='container mx-auto px-10 pb-16'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 border border-zinc-200 rounded-md '>
                {categories.map(category => (
                    <Link to={'/products'} key={category.id} className=' p-4 rounded-md  bg-white flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:bg-[#F8F8FA] cursor-pointer border border-zinc-200 group'>
                        <div className='w-10 h-10 '>
                            <img src={category.image} alt={category.image} className='w-full h-full group-hover:scale-110 transition-all duration-300' />
                        </div>
                        <h2 className='text-lg '>{category.name}</h2>
                        <p>{category.productCount}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Category
