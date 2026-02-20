import React,{useState,useEffect} from 'react'
import { getMenuItems } from '../services/menu_services'
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <h1>Today Menu</h1>
      
      {menuItems.map(item => (
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 w-72">

          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={item.image} alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Tag */}
            <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest bg-amber-400 text-stone-900 px-3 py-1 rounded-full">
              {item.category.name}
            </span>

            {/* Price */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-1 shadow">
              <span className="text-stone-900 font-bold text-lg">${item.price}</span>
            </div>
          </div>

          <div className="p-5">

            <h3 className="text-stone-900 font-bold text-xl leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">{item.description}</p>
            <button className="w-full py-3 rounded-2xl bg-stone-900 text-white text-sm font-semibold tracking-wide hover:bg-amber-500 hover:text-stone-900 transition-all duration-300 active:scale-95">
              Add to Order
            </button>

          </div>
</div> ))}
      
    </div>
  )
}

export default Menu