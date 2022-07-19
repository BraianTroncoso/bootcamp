public class positive_or_negative_number {
    public static void main(String[] args) {
        int numeroIf = 0;

        if (numeroIf < 0){
            System.out.println("Es un numero negativo");
        } else if (numeroIf > 0) {
            System.out.println("Es un numero positivo");
        } else if (numeroIf == 0) {
            System.out.println("Es un numero 0");
        }else {
            System.out.println("El dato ingresado no es valido");
        }
    }
}
/*Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.*/