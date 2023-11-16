import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import {getProduct} from "./../api/productosApi.js"
const ProductContainer: React.FC = () => {
  const params = useParams()
  const productId = params.id
  const [cantidad,setCantidad]=useState(1)
  const [producto,setProducto] = useState({})
  useEffect(()=>{
    traerProducto(productId)
  },[])
  async function traerProducto(productId){
    const response  = await getProduct(productId)
    setProducto(response.data)
  }
  const sumar=()=>{
    setCantidad(cantidad+1)
  }
  const restar=()=>{
    if(cantidad >1){
        setCantidad(cantidad-1)
    }
  }
  const agregarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const newProducto = {
        ...producto,
        cantidad: cantidad,
    };
    const index = carrito.findIndex((p: any) => p.id_producto === producto.id_producto);
    if (index !== -1) {
        // Si el producto ya existe en el carrito, sumamos la cantidad
        carrito[index].cantidad += cantidad;
    } else {
        // Si el producto no existe en el carrito, lo agregamos
        carrito.push(newProducto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Container</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonRow key={producto.id}>
        <IonCol>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{producto.nombre}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonItem>
                        <IonLabel>Precio:</IonLabel>
                        <IonText>$$ {producto.precio}</IonText>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Stock:</IonLabel>
                        <IonText>{producto.stock}</IonText>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Imagen:</IonLabel>
                        <IonImg src={producto.imagen} style={{ width: '100px', height: '100px' }} />
                    </IonItem>
                    <IonButton onClick={sumar}>+</IonButton>
                    <IonButton onClick={restar}>-</IonButton>
                    <IonButton onClick={agregarCarrito}>Agregar a Carrito</IonButton>
                    <IonTitle>Cantidad elegida {cantidad}</IonTitle>
                </IonCardContent>
            </IonCard>
            <IonButton onClick={()=>window.location.href="/tab-menu"}>Volver a catalogo</IonButton>
        </IonCol>
      </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProductContainer;
