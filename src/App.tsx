import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutesPage } from './pages/routesPage'
import { RoutePage } from './pages/routePage'
import { DeliveryPage } from './pages/deliveryPage'


const App = () => {
  return (
    <BrowserRouter basename='/rotab-deliverys/'>
      {/*       <nav
        className="fixed bottom-0 right-0 left-0 mx-auto my-5 px-6 z-50 w-fit flex justify-center bg-white border border-gray-200 shadow-md p-4 rounded-4xl">

        <Link className="mr-4 text-blue-600 font-medium hover:underline" to="/">Rotas</Link>
        <Link className="text-blue-600 font-medium hover:underline" to="/route">Rota</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<RoutesPage />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App

