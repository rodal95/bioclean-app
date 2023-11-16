import React, { useState, useEffect } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
const RadioPage:React.FC = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('carrito')|| '[]');
    if (carrito) {
      setProductos(carrito);
    }
  }, []);
  
  const finalizarPedido = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');

    // Obtener el último id de pedido
    const ultimoId = pedidos.length > 0 ? pedidos[pedidos.length - 1].id : 0;

    // Crear el nuevo pedido con su respectivo id
    const nuevoPedido = {
      id: ultimoId + 1,
      productos: carrito
    };

    // Agregar el nuevo pedido al arreglo de pedidos
    const nuevosPedidos = [...pedidos, nuevoPedido];

    // Guardar los nuevos pedidos en el local storage
    localStorage.setItem('pedidos', JSON.stringify(nuevosPedidos));

    // Limpiar el carrito
    localStorage.removeItem('carrito');
    setProductos([]);
  };
  return(
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Carrito</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
      {productos && productos.length > 0 ? (
        <>
          {productos.map((producto: any) => (
            <IonRow key={producto.id}>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{producto.nombre}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonItem>
                      <IonLabel>Precio:</IonLabel>
                      <IonText>{producto.precio}</IonText>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Stock:</IonLabel>
                      <IonText>{producto.stock}</IonText>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Imagen:</IonLabel>
                      <IonImg src={producto.imagen} style={{ width: '100px', height: '100px' }} />
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
          <IonButton onClick={finalizarPedido} expand="full">
            Finalizar Pedido
          </IonButton>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Tu carrito está vacío</p>
        </div>
      )}
    </IonContent>
        
      </IonPage>
    </>
  );
};

export default RadioPage;