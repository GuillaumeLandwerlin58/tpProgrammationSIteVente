"use client";
import {Checkbox, Group, TextInput} from "@mantine/core";
import {Button} from "tp-kit/components";
import {CheckboxGroup} from "@mantine/core/lib/Checkbox/CheckboxGroup/CheckboxGroup";
import {useForm} from "@mantine/form";
import {ProductsCategoryData} from "tp-kit/types";
import {ProductFilterResult} from "@/types";

type Props = {
    categories: ProductsCategoryData[],
    onChange?: (values: ProductFilterResult) => void
}

const ProductFilter = ({categories, onChange}:Props) => {

    const form = useForm<ProductFilterResult>({
        initialValues: {
            categoriesSlug: [],
            search: []
        }
    })

    return (
        <form onSubmit={form.onSubmit((values) => onChange && onChange(values))}>
            <TextInput placeholder="Search" {...form.getInputProps('search')}/>
                        <Checkbox.Group defaultValue={['react']} label="categories" {...form.getInputProps('categoriesSlug')}>
                            <Group>
                                {categories.map((category) => (
                                    <Checkbox label={category.name} value={category.slug}/>
                                ))}
                            </Group>
                        </Checkbox.Group>
                <Button variant="primary" type="submit">Filtrer</Button>
        </form>
    )
}

export default ProductFilter;