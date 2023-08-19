import { useContext, useState } from "react"
import { BuyContainer, ProductCard, QuantityContainer, Tags } from "./styles"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { ProductsContext, useProductsContext } from "../../../../contexts/CyclesContext"
import { Product } from "../../../../reducers/cycles/reducer";
// import { useFormContext } from "react-hook-form"

interface ProductProps {
    id: string
    name: string
    image: string
    description: string
    tags: string[]
    price: number
    quantity: number
  }


export function Products({id, name, image, description, tags, price}: ProductProps){

    const { productsCart, setProductsCart } = useProductsContext();

    const addToCart = () => {
        setProductsCart((currentProducts) => {
            const isProductFound = currentProducts.find((product) => product.id === id)
            if(isProductFound){
                return currentProducts.map((product) => {
                    if(product.id === id){
                        return {...product, quantity: product.quantity + 1}
                    }
                    else {
                        return product
                    }
                })
            }
            else {
                return [...currentProducts, {id, quantity: 1, price, tags, description, image, name}]
            }
        })
    }

    const removeToCart = () => {
        setProductsCart((currentProducts) => {
            if (currentProducts.find((product) => product.id === id)?.quantity === 1){
                return currentProducts.filter((product) => product.id !== id)
            }

            else {
                return currentProducts.map((product) => {
                    if(product.id === id){
                        return {...product, quantity: product.quantity - 1}
                    }
                    else {
                        return product
                    }
                })
            }
        })
    }

    const getQuantityByid = (id) => {
        return productsCart.find((product) => product.id === id)?.quantity || 0;
    }

    const quantityPerItem = getQuantityByid(id);
        console.log(quantityPerItem)
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
                    <button onClick={() => removeToCart()}>
                        <Minus/>
                    </button>
                    {quantityPerItem >= 0 && (<div>{quantityPerItem}</div>)}
                    
                    
                    
                    <button onClick={() => addToCart()}>
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