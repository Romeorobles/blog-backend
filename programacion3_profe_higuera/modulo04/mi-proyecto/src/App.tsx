import { useState } from 'react'
import ProductCard from './components/ProductCard'
import ProductCatalogList from './components/ProductCatalogList'
import UserProfileCard from './components/UserProfileCard'
import PetCatalogList from './components/PetCatalogList'
import DigitalCounter from './components/DigitalCounter'
import SafeCounter from './components/SafeConunter'
import UserProfileForm from './components/UserProfileFomr'
import TaskManager from './components/TaskManager'

const pets = [
  { id: 1, nombre: 'Max',     tipo: 'Perro',    edad: 2, precio: 150.00 },
  { id: 2, nombre: 'Luna',    tipo: 'Gato',     edad: 1, precio: 80.00  },
  { id: 3, nombre: 'Piolín',  tipo: 'Pájaro',   edad: 3, precio: 45.00  },
  { id: 4, nombre: 'Nemo',    tipo: 'Pez',      edad: 1, precio: 20.00  },
  { id: 5, nombre: 'Toby',    tipo: 'Conejo',   edad: 2, precio: 60.00  },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

interface CartItem {
  id: number
  name: string
  price: number
}

export default function App() {
  const [paso, setPaso] = useState(5)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  const content =
    paso === 1 ? <DigitalCounter label="Contador" step={1} /> :
    paso === 2 ? <SafeCounter /> :
    paso === 3 ? <UserProfileForm /> :
    paso === 4 ? <TaskManager /> :
    (
      <>
        <ProductCard
          title="Bienvenido a la tienda"
          description="Encuentra los mejores accesorios para tu escritorio"
          highlighted={false}
          price={1000}
        />

        <ProductCard
          title="Oferta del día"
          description="Webcam HD con 20% de descuento"
          price={47.99}
        />

        <ProductCatalogList
          products={catalog}
          title="Productos disponibles"
          onAddToCart={handleAddToCart}
        />

        {cartItems.length > 0 && (
          <section style={{ margin: '16px 0', padding: 12, border: '1px dashed #999', borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>Carrito ({cartItems.length})</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cartItems.map((item) => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{item.name}</span>
                  <strong>${item.price.toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 'bold' }}>Total: ${cartTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #ddd', cursor: 'pointer' }}>
              Vaciar carrito
            </button>
          </section>
        )}

        <PetCatalogList animals={pets} title="Tienda de Mascotas " />

        <UserProfileCard
          fullName="Romeo Robles"
          email="isrraelrobles742@gmail.com"
          role="admin_tupapi"
          isActive={true}
          skills={['TypeScript', 'React', 'NestJS', 'PostgreSQL','Mongo db','odoo']}
          bio="Desarrollador full stack en formación."
        />
      </>
    )

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setPaso(n)}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: paso === n ? '2px solid #0070f3' : '1px solid #ddd',
              background: paso === n ? '#eaf3ff' : '#fff',
              color: '#000000',
              cursor: 'pointer',
            }}
          >
            Paso {n}
          </button>
        ))}
      </nav>

      {content}
    </main>
  )
}
