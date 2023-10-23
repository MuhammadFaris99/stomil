interface Props {
    params: { [key: string]: string }
}

const PageProduct = ({ params }: Props) => {
    return `product ${params.slug}`
}

export default PageProduct