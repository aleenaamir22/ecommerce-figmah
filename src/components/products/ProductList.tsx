import { useState } from "react";
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Burger Blast", price: "$250", category: "Food", description: "Creamy Blast Burger", image: "/om2.jpeg" },
  { id: 2, name: "Meat Balls", price: "$120", category: "Food", description: "A tender and juicy mix", image: "/om1.jpeg" },
  { id: 3, name: "Chicken Chunks", price: "$300", category: "Food", description: "Description of chicken chunks", image: "/om3.jpeg" },
  { id: 4, name: "Strawberry with Oats", price: "$100", category: "Food", description: "Description of Strawberry with oats", image: "/om4.jpeg" },
  { id: 5, name: "Platter", price: "$300", category: "Food", description: "Description of Platter", image: "/om5.jpeg" },
  { id: 6, name: "Choco MilkShake", price: "$150", category: "Food", description: "Description of MilkShake", image: "/om6.jpeg" },
  { id: 7, name: "Veg Sandwich", price: "$80", category: "Food", description: "Description of Sandwich", image: "/om7.jpeg" },
  { id: 8, name: "Smash Burger", price: "$170", category: "Food", description: "Description of Smash Burger", image: "/om8.jpeg" },
];

const ProductList = () => {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);

  const handleMouseEnter = (product: Product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    alert(`${product.name} added to cart!`); // You can remove this alert later
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      padding: '1rem',
    }}>
      {products.slice(0, 15).map((product) => (
        <div
          key={product.id}
          style={{
            position: 'relative',
            border: '1px solid #D1D5DB',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FEF08A',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Ensures button stays at the bottom
            height: '350px', // Fixed height to make all cards same size
          }}
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ height: '60%', position: 'relative' }}>
            <Image
              src={product.image}
              alt={product.name}
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div style={{ padding: '1rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1F2937',
            }}>
              {product.name}
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: '#4B5563',
            }}>
              {product.price}
            </p>
            {hoveredProduct?.id === product.id && (
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '1rem',
              }}>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Description:</strong> {product.description}</p>
              </div>
            )}
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: '#F59E0B', // Yellow
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
          
        </div>
        ))}
      </div>
    
    
  );
};

export default ProductList;
