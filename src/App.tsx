import React from 'react';
import { Menu, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">Sabor & Arte</h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                <Menu size={24} />
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600">Início</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600">Cardápio</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Contato</a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Início</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Cardápio</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Sobre</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
              alt="Hambúrguer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Sabores Inesquecíveis</h2>
              <p className="text-xl md:text-2xl mb-8">Descubra o melhor da culinária artesanal</p>
              <a
                href="#menu"
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300"
              >
                Ver Cardápio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nosso Cardápio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Hambúrguer Clássico',
                price: 'R$ 28,90',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80'
              },
              {
                name: 'Batata Frita Especial',
                price: 'R$ 18,90',
                image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80'
              },
              {
                name: 'Milk Shake',
                price: 'R$ 16,90',
                image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-orange-600 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Desde 2010, o Sabor & Arte tem sido referência em hambúrgueres artesanais.
                Nossa paixão pela gastronomia nos motiva a criar experiências únicas para
                nossos clientes.
              </p>
              <p className="text-gray-600">
                Utilizamos ingredientes frescos e de alta qualidade, preparados com técnicas
                especiais que garantem sabor e qualidade incomparáveis.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80"
                alt="Cozinha"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="text-gray-600">Seg - Dom: 11h às 23h</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">Rua das Delícias, 123 - São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Sabor & Arte</h2>
              <p className="text-gray-400">Sabor que inspira, arte que encanta.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-600">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Sabor & Arte. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;