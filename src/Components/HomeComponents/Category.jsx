import useData from "../../Hooks/useData"


const Category = () => {

    const {categories} = useData();

    return (
        <section className='container mx-auto px-10'>
            <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 pb-10'>
                {categories.map(category => (
                    <div key={category.id} className=' p-4 rounded-md mb-4 bg-[#F8F8FA] flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:bg-white cursor-pointer'>
                        <div className='w-10 h-10 '>
                            <img src={category.image} alt={category.image} className='w-full h-full' />
                        </div>
                        <h2 className='text-lg font-semibold'>{category.name}</h2>
                        <p>{category.items}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category
