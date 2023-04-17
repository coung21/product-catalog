import AddForm from './components/Form/AddForm';
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/Product/ProductList'

function App() {

  return (
    <div className='h-screen overflow-y-hidden'>
      <NavBar />
      <div className='flex mt-14 h-screen'>
        <ProductList />
        <AddForm />
      </div>
    </div>
  )
}

export default App
