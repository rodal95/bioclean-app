import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonSelect, IonButton, IonList, IonItem, IonListHeader, IonRow, IonCol, IonSelectOption } from '@ionic/react';


import {useState, } from "react"
import './Home.css';
import React from 'react';

const Home: React.FC = () => {


  const redirectToTabMenu = () => {
    window.location.href="/tab-menu";
  };
  const redirectPerroPage = ()=>{
    window.location.href="/perro";
  }
  const redirectArmaduraPage = ()=>{
    window.location.href="/armadura";
  }
  const redirectPizarronPage = ()=>{
    window.location.href="/pizarron";
  }
  const redirectComputadoraPage = ()=>{
    window.location.href="/computadora";
  }
  // Declaración e inicialización de un array de números
  const numbers: number[] = [1, 2, 3, 4, 5];

  // Mostrar el array en Ionic
  console.log(numbers);

  const frutas: string[] = ['manzana', 'banana', 'cereza'];

  // Agregar un elemento al final del array
  frutas.push('uva');

  // Mostrar el array en Ionic
  console.log(frutas);
  
  // Declaración e inicialización de un array de números
  const numeros: number[] = [10, 20, 30, 40, 50];

  // Recorrer el array y mostrar los elementos
    numeros.forEach(numero => {
    console.log(numero);
});
  // Declaración e inicialización de un array de números
const valores: number[] = [8, 15, 12, 7, 24, 35];

// Filtrar valores mayores que 10
const valoresMayoresA10 = valores.filter(valor => valor > 10);

// Mostrar los valores filtrados en Ionic
console.log(valoresMayoresA10);

interface Persona {
  Nombre: string;
  Apellido: string;
  Edad: number;
  Estado: 'activo' | 'inactivo';
}

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState(0);
  const [estado, setEstado] = useState<'activo' | 'inactivo'>('activo');
  const [personas, setPersonas] = useState<Persona[]>([]);

  const agregarPersona = () => {
    const nuevaPersona: Persona = {
      Nombre: nombre,
      Apellido: apellido,
      Edad: edad,
      Estado: estado,
    };
    setPersonas([...personas, nuevaPersona]);
    setNombre('');
    setApellido('');
    setEdad(0);
    setEstado('activo');
  };

  return (
    <IonContent>
      <div>Bienvenido</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem consequatur sit commodi nulla! Veritatis
        adipisci doloribus eos necessitatibus assumenda consequatur voluptatibus velit, similique ipsam, optio quis
        soluta illo vero!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae veniam consequatur repellat consequuntur amet explicabo tempore reprehenderit quod? Aut placeat corporis expedita aliquam. Ipsum temporibus eaque deserunt aperiam minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque repudiandae iure quod sequi ducimus libero culpa quisquam, sapiente odit deleniti dolore tempore quo quibusdam adipisci ab dicta, id unde.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum nostrum hic recusandae soluta voluptate, in iure rem vero provident eaque eos alias. Fugiat ex reiciendis illum voluptatum minus modi!
      </p>
      <IonButton  onClick={redirectToTabMenu}>
        Ir al menú Principal
      </IonButton>
      <IonButton  onClick={redirectPerroPage}>
        Ir a perro page
      </IonButton>
      <IonButton  onClick={redirectArmaduraPage}>
        Ir a armadura page
      </IonButton>
      <IonButton  onClick={redirectPizarronPage}>
        Ir a pizarron page
      </IonButton>
      <IonButton  onClick={redirectComputadoraPage}>
        Ir a computadora page
      </IonButton>
      <form onSubmit={(e) => {
          e.preventDefault();
          agregarPersona();
        }}>
          <IonList>
            <IonListHeader>Agregar Persona</IonListHeader>
            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput type="text" value={nombre} onIonChange={(e) => setNombre(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Apellido</IonLabel>
              <IonInput type="text" value={apellido} onIonChange={(e) => setApellido(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Edad</IonLabel>
              <IonInput type="number" value={edad} onIonChange={(e) => setEdad(parseInt(e.detail.value!))}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Estado</IonLabel>
              <IonSelect value={estado} onIonChange={(e) => setEstado(e.detail.value)}>
                <IonSelectOption value="activo">Activo</IonSelectOption>
                <IonSelectOption value="inactivo">Inactivo</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton expand="full" type="submit">Agregar</IonButton>
          </IonList>
        </form>

        <IonList>
          <IonListHeader>Lista de Personas</IonListHeader>
          {personas.map((persona, index) => (
            <IonRow key={index}>
              <IonCol>
                <IonItem>
                  <IonLabel>Nombre: {persona.Nombre}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Apellido: {persona.Apellido}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Edad: {persona.Edad}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Estado: {persona.Estado}</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          ))}
        </IonList>
    </IonContent>
  );
};

export default Home;
