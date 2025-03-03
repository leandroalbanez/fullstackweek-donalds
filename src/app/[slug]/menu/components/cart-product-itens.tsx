import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../contexts/cart";

interface CartProductItemProps {
    product: CartProduct;
}

const CartProductItem = ({product}:CartProductItemProps) => {
    return ( 
    <div className="flex items-center justify-between">
        {/*ESQUEDA*/}
        <div className="flex items-center gap-3">
            {/*ESQUERDA*/}
            <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                <Image src={product.imageUrl} alt={product.name} fill />
            </div>
            {/*DIREITA*/}
            <div className="space-y-1">
                <p className="max-w-[90%] truncate text-ellipsis text-xs">{product.name}</p>
                <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                {/*BOTOES*/}
                <div className="flex items-center gap-1 text-center">
                    <Button className="h-7 w-7 rounded-lg" variant="outline">
                        <ChevronLeftIcon />
                    </Button>
                    <p className="w-7 text-xs">{product.quantity}</p>
                    <Button className="h-7 w-7 rounded-lg" variant="destructive">
                        <ChevronRightIcon />
                    </Button>
                </div>
            </div>
        </div>
        {/*DELETAR */}
        <Button className="h7 w-7 rounded-lg" variant="outline">
            <TrashIcon />
        </Button>
    </div>
    
    );
}
 
export default CartProductItem;