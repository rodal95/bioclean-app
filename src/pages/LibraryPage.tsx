import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonList, IonIcon } from '@ionic/react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { addOutline, removeOutline } from 'ionicons/icons';

const LibraryPage:React.FC = () => {
  const [pedidos, setPedidos] = useState([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const pedidosGuardados = localStorage.getItem('pedidos');
    if (pedidosGuardados) {
      setPedidos(JSON.parse(pedidosGuardados));
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pedidos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {pedidos.map((pedido, index) => (
            <IonItem key={index} onClick={() => toggleAccordion(index)} button>
              <IonLabel>Pedido #{index + 1}</IonLabel>
              <IonIcon icon={activeIndex === index ? removeOutline : addOutline} slot="end" />
            </IonItem>
          ))}
          {pedidos.map((pedido, index) => (
            <div key={index} hidden={activeIndex !== index}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    {/* Agrega más columnas según las propiedades de tu pedido */}
                  </tr>
                </thead>
                <tbody>
                  {pedido.productos.map((producto: any, prodIndex: number) => (
                    <tr key={prodIndex}>
                      <td>{producto.nombre}</td>
                      <td>{producto.cantidad}</td>
                      {/* Agrega más celdas según las propiedades de tu producto */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LibraryPage;