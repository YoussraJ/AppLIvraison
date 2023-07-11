public class StringSumCalculator {

    public static int calculateStringSum(String str) {
        int sum = 0;

        for (int i = 0; i < str.length(); i++) {
            sum += str.charAt(i);
        }

        return sum;
    }

    public static void main(String[] args) {
        String input = "Hello World";
        int stringSum = calculateStringSum(input);
        System.out.println("La somme des codes ASCII de la chaîne \"" + input + "\" est : " + stringSum);
    }
}
