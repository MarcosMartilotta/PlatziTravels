orientado a utilidades, personalizable, basado en clases
otros frameworks son material ui o bulma. 
## Utiliti first
    Se trata de crear componentes cuyos estilos esten en las clases, brindadno un desarrollo mas agil y limpio.
## Directivas
    Son las 3 directivas del archivo css. 
    Para intentar explicar un poco más claro esta clase.

Recordar que @tailwind base maneja los elementos HTML (div, span, ul, p, h1, etc), @tailwind components maneja las clases y finalmente @tailwind utilities maneja las utilidades (que son todas aquellas propiedades referentes a los atributos CSS) (filter: grayscale(100%)).
Entonces cuando hablamos de la directiva @layer lo que hacemos es sobreescribir o definir nuestros propios estilos, componentes o configuraciones para cualquiera de estas 3 categorías.

Recuerden que Tailwind ya tiene estilos predefinidos en sus clases entonces puede que exista text-small y supongamos que eso hace que un texto sea de tamaño 12px PERO que sucede si tu quieres que ese texto sea de 11px y no de 12px?
Pues justo para eso puedes usar @layer components y modificas ese valor en una clase especifica. O si quieres que todos los li tengan un text-underline pues defines con @layer base que tus li van a tener x características.

Así mismo puedes crear tus propias clases y definir un conjunto de propiedades.
Ejemplo crear una clase .card y le defines:
@layer components {
.card {
background-color: theme(‘colors.white’);
border-radius: theme(‘borderRadius.lg’);
padding: theme(‘spacing.6’);
box-shadow: theme(‘boxShadow.xl’);
}
}

Después dentro de tu HTML solo llamas a la clase .card y listo.