import Image from 'next/image'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import ProductFilter from "@/components/product-filter";
const categories = PRODUCTS_CATEGORY_DATA;

import Productlist from "@/components/productlist";

export default function Home() {
  return (
    <div>
      <Productlist categories={categories} />
    </div>
  )
}