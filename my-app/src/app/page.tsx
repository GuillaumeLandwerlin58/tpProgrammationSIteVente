import Image from 'next/image'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import ProductFilter from "@/components/product-filter";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {
  console.log(categories)
  return (<main>
        <SectionContainer>
          <BreadCrumbs
              items={[
                {
                  label: 'Accueil',
                  url: '#',
                }
              ]}
          />
            <ProductFilter categories={categories}/>
          {categories.map((category) => (
              <>
                <h1 className="text-4xl font-bold">{category.name}({category.products.length})</h1>
                <br></br>
                <ProductGridLayout products={category.products}>
                  {(product) => <ProductCardLayout product={product} button={<Button fullWidth variant="ghost">Click me</Button>}/>}

                </ProductGridLayout>

              </>
          ))}


          {/*(product) => <pre>{JSON.stringify(product,null,2)}</pre>*/}
          {/*categories.map((product) => <ProductCardLayout product={product} />)*/}




        </SectionContainer>


      </main>
  )
}
