import WelcomeBanner        from './components/WelcomeBanner'
import UserGreeting         from './components/UserGreeting'
import CurrentDateDisplay   from './components/CurrentDateDisplay'
import ColoredBox           from './components/ColoredBox'
import ConditionalGreeting  from './components/ConditionalGreeting'
import FruitList            from './components/FruitList'
import PriceTag             from './components/PriceTag'
import StatusBadge          from './components/StatusBadge'
import MiniProfileCard      from './components/MiniProfileCard'
import SimpleInfoTable      from './components/SimpleInfoTable'
import ProductCard          from './components/ProductCard'
import ProductCatalogList   from './components/ProductCatalogList'
import UserProfileCard      from './components/UserProfileCard'
import TemperatureDisplay   from './components/TemperatureDisplay'
import ProgressBar          from './components/ProgressBar'
import BusinessCard         from './components/BusinessCard'
import RatingStars          from './components/RatingStars'
import TagList              from './components/TagList'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// │  14  TemperatureDisplay  — ejercicio: conversión °C → °F y K           │
// │  15  ProgressBar         — ejercicio: barra de progreso con color       │
// │  16  BusinessCard        — ejercicio: campos opcionales con &&          │
// │  17  RatingStars         — ejercicio: estrellas con .map()              │
// │  18  TagList             — ejercicio: badges con .map() y color         │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 1

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',    price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico',   price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',           price: 59.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :
    PASO === 14 ? <TemperatureDisplay celsius={25} /> :
    PASO === 15 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <ProgressBar percent={75} />
        <ProgressBar percent={40} color="#22c55e" />
        <ProgressBar percent={90} color="#e00" />
      </div>
    ) :
    PASO === 16 ? (
      <BusinessCard
        name="Romeo Robles"
        email="isrraelrobles742@gmail.com"
        phone="+502 1234-5678"
        website="github.com/Romeorobles"
      />
    ) :
    PASO === 17 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <RatingStars rating={5} />
        <RatingStars rating={3} />
        <RatingStars rating={1} maxStars={10} />
      </div>
    ) :
    PASO === 18 ? (
      <TagList
        tags={['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'MongoDB', 'Odoo']}
        color="#6366f1"
      />
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
