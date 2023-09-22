"use client";
import ProductFilters from "@/components/product-filter.tsx";
import {BreadCrumbs, Button, SectionContainer} from "../../tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "../../tp-kit/components/products";


const Productlist = ({categories}) => {
    return (
        <main>
            <BreadCrumbs
                items={[
                    {
                        label: 'Accueil',
                        size: 'large',

                        url: '#'
                    }
                ]}
            />
            <ProductFilters categories={categories} />
            <SectionContainer>
                {categories.map(category => (
                    <div key={category.id}>
                        <BreadCrumbs items={[
                            {
                                label: category.name + ' (' + category.products.length + ')',
                                url: '#'
                            }
                        ]}/>
                        <ProductGridLayout products={category.products}>
                            {product => (
                                <ProductCardLayout product={product} button={<Button fullWidth variant="ghost">Ajouter au panier</Button>} />
                            )}
                        </ProductGridLayout>
                    </div>
                ))}
            </SectionContainer>


        </main>
    )
}

export default Productlist;