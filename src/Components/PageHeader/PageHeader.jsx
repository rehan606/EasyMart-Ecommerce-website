import React from 'react'

const PageHeader = ({title, description}) => {
    return (
        <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-20 px-4">
            <div className="container mx-auto text-center md:px-20">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {title}
                </h1>
                <p className="max-w-3xl mx-auto md:text-lg text-white/90">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default PageHeader
