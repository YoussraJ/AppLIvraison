public class PowerCalculator {

    public static double calculatePower(double base, int exponent) {
        double result = 1;
        
        if (exponent >= 0) {
            for (int i = 0; i < exponent; i++) {
                result *= base;
            }
        } else {
            for (int i = 0; i > exponent; i--) {
                result /= base;
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        double base = 2.5;
        int exponent = 3;
        double power = calculatePower(base, exponent);
        System.out.println(base + " à la puissance " + exponent + " est : " + power);
    }
}
