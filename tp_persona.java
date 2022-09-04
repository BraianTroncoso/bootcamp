public class tp_persona {
    public static void main(String[] args) {
    Cliente usuario = new Cliente();
    usuario.nombre = "Cristian Castro";
    usuario.edad = 25;
    usuario.telefono = 12901;
    usuario.credito =9999;

        //MOSTRAMOS LOS VALORES POR PANTALLA.
        System.out.println("Buenos días señor "+usuario.nombre);
        System.out.println("de "+usuario.edad+" años de edad");
        System.out.println("Su numero de telefono es: "+usuario.telefono);
        System.out.println("Usted tiene un saldo de: "+usuario.credito);
        System.out.println("");
        System.out.println();
        System.out.println("----------------------------------------------");
        Trabajador operario = new Trabajador();{
            operario.nombre = "Luis Miguel";
            operario.edad = 30;
            operario.telefono = 202423;
            operario.salario = 10299;

            //MOSTRAMOS LOS VALORES POR PANTALLA.
            System.out.println("Buenos días señor "+operario.nombre);
            System.out.println("de "+operario.edad+" años de edad");
            System.out.println("Su numero de telefono es: "+operario.telefono);
            System.out.println("Usted tiene un salario de: "+operario.salario);
        }
    }


    static class Persona{
        int edad, telefono;
        String nombre;

    }

    static class Cliente extends Persona{
        private int credito;
    }
    static class Trabajador extends Persona{
        private int salario;
    }
}
/*
 Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
 */