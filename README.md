# 🧠 Juego de Memoria (Memory Game)

Un clásico juego de memoria (tipo "Memorama" o "Concentrese") desarrollado con **JavaScript Vanilla**, HTML5 y CSS3. El objetivo es encontrar todos los pares de cartas antes de que se agote el tiempo.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-green)
![Lenguaje](https://img.shields.io/badge/JavaScript-ES6-yellow)


## 🎮 Características

* **Lógica de Barajado:** Las cartas se ordenan aleatoriamente en cada reinicio usando `Math.random()`.
* **Temporizador Regresivo:** Tienes 30 segundos para completar el tablero.
* **Contador de Movimientos:** Rastrea cuántos intentos te toma ganar.
* **Sistema de Aciertos:** Detecta automáticamente cuando encuentras un par y bloquea las cartas.
* **Feedback Visual:** Mensajes de victoria o derrota al finalizar el juego.

## 🛠️ Tecnologías Usadas

* **HTML5:** Estructura semántica del tablero (`table`, `button`).
* **CSS3:** Diseño visual, Grid/Flexbox y efectos de hover (Glassmorphism).
* **JavaScript (ES6+):**
    * Manipulación del DOM (`getElementById`, `innerHTML`).
    * Manejo de Eventos (`onclick`).
    * Funciones de tiempo (`setInterval`, `setTimeout`).
    * Lógica de Arrays (`sort`, ciclos `for`).

## 🚀 Cómo jugar localmente

1.  Clona este repositorio:
    ```bash
    git clone (https://github.com/NicoYazawaArch/Juego-Memoria-JS.git)
    ```
2.  Navega a la carpeta del proyecto.
3.  Abre el archivo `index.html` en tu navegador web favorito.

## 📄 Lógica del Código (Snippet)

El corazón del juego utiliza una función de comparación para validar los pares:

```javascript
if (primerResultado == segundoResultado){
    // Si coinciden: Se bloquean las cartas y aumenta el contador
    tarjetasDestapadas = 0;
    aciertos++;
} else {
    // Si no coinciden: Se vuelven a tapar después de 800ms
    setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
    }, 800);
}