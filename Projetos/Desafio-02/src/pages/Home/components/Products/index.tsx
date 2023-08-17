import { useState } from "react"
import { BuyContainer, ProductCard, QuantityContainer, Tags } from "./styles"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useFormContext } from "react-hook-form"

interface ProductProps {
    id: string
    name: string
    image: string
    description: string
    tags: string[]
    price: number
  }


export function Products({id, name, image, description, tags, price}: ProductProps){
    const [count, setCount] = useState(0);
    const {register} = useFormContext()

    return (
        <ProductCard>
            <img src={image} />

            <Tags>
                {tags && tags.map((tag) => (
                    <div className="tagProduct" key={tag + id}>{tag}</div>
                ))}
            </Tags>

            <div className="nameProduct">{name}</div>
            <p className="descriptionProduct">{description}</p>
            
            <BuyContainer>
                <div className="priceProduct">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                <QuantityContainer>
                    <button onClick={() => count> 0 ? setCount(count - 1): 0} {...register(count), {valueAsNumber: true}}>
                        <Minus/>
                    </button>
                    {count}
                    <button onClick={() => setCount(count + 1)}>
                        <Plus />
                    </button>
                </QuantityContainer>
                <NavLink to="checkout" title="Checkout">
                    <ShoppingCart className="shopIcon" size={21.5}  weight="fill" />
                </NavLink>

            </BuyContainer>

        </ProductCard>
    )

}