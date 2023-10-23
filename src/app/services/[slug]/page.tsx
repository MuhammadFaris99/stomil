interface Props {
    params: { [key: string]: string }
}

const PageService = ({ params }: Props) => {
    return `product ${params.slug}`
}

export default PageService