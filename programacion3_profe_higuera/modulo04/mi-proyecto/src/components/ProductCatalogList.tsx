    // src/components/ProductCatalogList.tsx

    interface Product {
    id: number
    name: string
    price: number
    outOfStock?: boolean
    }

    interface ProductCatalogListProps {
    products: Product[]
    title?: string
    onAddToCart?: (id: number, name: string, price: number) => void
    }

    export default function ProductCatalogList({
    products,
    title = 'Catálogo',
    onAddToCart,
    }: ProductCatalogListProps) {
    return (
        <section>
        <h2 style={{ marginBottom: 16 }}>{title}</h2>

        {products.length === 0 && (
            <p style={{ color: '#999' }}>No hay productos disponibles.</p>
        )}

        <ul style={{ listStyle: 'none', padding: 0 }}>
            {products.map((product) => (
            <li
                key={product.id}
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #eee',
                opacity: product.outOfStock ? 0.4 : 1,
                }}
            >
                <span>
                {product.name}
                {product.outOfStock && (
                    <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                    Agotado
                    </em>
                )}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <strong>${product.price.toFixed(2)}</strong>
                {onAddToCart && !product.outOfStock && (
                    <button
                    onClick={() => onAddToCart(product.id, product.name, product.price)}
                    style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}
                    >
                    Agregar
                    </button>
                )}
                </span>
            </li>
            ))}
        </ul>
        </section>
    )
    }