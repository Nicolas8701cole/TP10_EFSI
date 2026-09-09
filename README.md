# TP EFSI - Sonido Sur

Este trabajo está hecho sobre el TP anterior de React Native y Expo.

Se mantuvieron la imagen de Coca-Cola, el diseño general, el email, la contraseña y la estructura original. Sobre ese formulario se agregaron los campos y validaciones pedidos para la inscripción de Sonido Sur.

## Cómo correrlo

Después de actualizar el proyecto a Expo 57:

npm install
npx expo install --check
npx expo start --tunnel

En iPhone hay que iniciar sesión en Expo desde la PC y desde Expo Go con la misma cuenta:

npx expo login

## Validación

Usé React Hook Form con useForm, Controller y rules.

Lo elegí porque permite manejar los valores y los errores del formulario sin tener que crear un estado distinto para cada campo.

## Campos

- Email
- Contraseña (se mantiene del TP anterior)
- Nombre completo
- Edad
- Teléfono
- Tipo de entrada General o VIP
- Opinión sobre Coca-Cola

## Bonus

- AsyncStorage guarda el último email.
- Hay un loading de 1 segundo antes de mostrar la confirmación.

Si se elige "Es mejor Pepsi" aparece un mensaje especial, pero la inscripción sigue siendo válida.
