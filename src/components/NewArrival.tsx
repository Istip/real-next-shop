"use client";

import Container from "./Container";
import Slider from "react-slick";
import Product from "./Product";
import { ProductInterface } from "../../type";

interface Props {
  products: ProductInterface[];
}

const NewArrival = ({ products }: Props) => {
  return (
    <Container className="-mt-32 relative z-20 border bg-stone-200">
      <div>
        <Slider>
          {products.map((product: ProductInterface) => (
            <Product key={product._id} product={product} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default NewArrival;
