public class SumCalculator {

    public static int calculateSum(int[] array) {
        int sum = 0;
        
        for (int element : array) {
            sum += element;
        }
        
        return sum;
    }

    public static void main(String[] args) {
        int[] numbers = {2, 4, 6, 8, 10};
        int sum = calculateSum(numbers);
        System.out.println("La somme des éléments du tableau est : " + sum);
    }
}
