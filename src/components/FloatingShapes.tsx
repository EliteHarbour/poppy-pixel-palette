
import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  type: 'circle' | 'square' | 'triangle';
  speed: number;
}

const colors = [
  'bg-pastel-blue',
  'bg-pastel-pink',
  'bg-pastel-purple',
  'bg-pastel-yellow',
  'bg-pastel-green',
  'bg-pastel-peach'
];

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const shapesArray: Shape[] = [];
    const shapeTypes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 12; i++) {
      shapesArray.push({
        id: i,
        size: Math.random() * 30 + 10, // Between 10 and 40
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)] as 'circle' | 'square' | 'triangle',
        speed: Math.random() * 0.5 + 0.2, // Between 0.2 and 0.7
      });
    }
    
    setShapes(shapesArray);
    
    const interval = setInterval(() => {
      setShapes(prevShapes => 
        prevShapes.map(shape => {
          let newY = shape.y - shape.speed;
          if (newY < -10) {
            newY = 110;
          }
          
          return {
            ...shape,
            y: newY,
            rotation: (shape.rotation + 0.1) % 360
          };
        })
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const renderShape = (shape: Shape) => {
    const shapeStyle = {
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      transform: `rotate(${shape.rotation}deg)`,
    };
    
    switch (shape.type) {
      case 'circle':
        return (
          <div 
            key={shape.id}
            className={`absolute ${shape.color} rounded-full opacity-50`} 
            style={shapeStyle}
          />
        );
      case 'square':
        return (
          <div 
            key={shape.id}
            className={`absolute ${shape.color} rounded-md opacity-50`} 
            style={shapeStyle}
          />
        );
      case 'triangle':
        return (
          <div 
            key={shape.id}
            className={`absolute opacity-50`} 
            style={{
              ...shapeStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid var(--color)`,
              // @ts-ignore
              '--color': shape.color.includes('bg-pastel-blue') ? '#D3E4FD' : 
                        shape.color.includes('bg-pastel-pink') ? '#FFDEE2' :
                        shape.color.includes('bg-pastel-purple') ? '#E5DEFF' :
                        shape.color.includes('bg-pastel-yellow') ? '#FEF7CD' :
                        shape.color.includes('bg-pastel-green') ? '#F2FCE2' : '#FDE1D3',
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {shapes.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;
