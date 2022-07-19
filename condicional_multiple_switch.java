public class condicional_multiple_switch{
  public static void main(String[] args) {
    
    String estacion = "otoño";

    switch(estacion){
      case "invierno":
      System.out.println("Usted esta en invierno, pongase un abrigo.");
      break;
      case "otoño":
      System.out.println("Usted esta en otoño, lleve un sueter");
      break;
      case "primavera":
      System.out.println("Usted esta en primavera, salga a pasear, disfrute del dia");
      break;
      case "verano":
      System.out.println("Usted esta en verano, cuidese del sol, use protector solar");
      break;
      default:
      System.out.println("El dato ingresado no es valido");
    }
  }
}

/* La instrucción switch es una instrucción de múltiples vías. Proporciona una forma sencilla de enviar la ejecución a diferentes partes del código en función del valor de la expresión. Básicamente, la expresión puede ser tipos de datos primitivos byte, short, char e int. A partir de JDK7, también funciona con tipos enumerados (Enum en java), la clase String y las clases Wrapper .*/


/* Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.*/