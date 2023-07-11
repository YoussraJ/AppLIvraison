public class ProductCalculator {

    public static int multiply(int num1, int num2) {
        return num1 * num2;
    }

    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 3;
        int product = multiply(num1, num2);
        System.out.println("Le produit de " + num1 + " et " + num2 + " est : " + product);
    }
}