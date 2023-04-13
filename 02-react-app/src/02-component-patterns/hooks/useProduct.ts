import { useEffect, useState } from "react"
import { Product, initialValues, onChangeArgs } from "../interfaces/interfaces"
export interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    console.log(initialValues?.count);

    const handleAdd = (value: number) => {

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        handleAdd
    }

}


