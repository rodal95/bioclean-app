import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import {getProducts} from "./../api/productosApi.js"
 const HomePage: React.FC = () => {
    const [productos, setProductos] = useState<any[]>([]);

    useEffect(()=>{
        traerProductos();
    },[])
    async function traerProductos(){
        const response = await getProducts();
        setProductos(response.data)
    }
    const verProducto =(id)=>{
        window.location.href="/productoDetail/"+id;

    }
    const salir = () => {
        window.location.href="/";
      };
    return (
    <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Productos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {productos && productos.map((producto: any) => (
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
                                        <IonButton onClick={()=>verProducto(producto.id_producto)}>Ver Producto</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>

                <IonButton  onClick={salir}>
                Salir
                </IonButton>
            </IonContent>
        </IonPage>
    </>)
};

export default HomePage

