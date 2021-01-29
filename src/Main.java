public class Main {
    public static void main(String[] args) {
        AverageFinder finder = new AverageFinder();

        //테스트1
        int[] testArray1 = {3, 7, 3};
        System.out.println(testArray1);
        System.out.println(finder.computeAverage(testArray1));

        //테스트2
        int[] testArray2 = {1, 3, 4, 7};
        System.out.println(finder.computeAverage(testArray2));

        //테스트3
        int[] testArray3 = {4};
        System.out.println(finder.computeAverage(testArray3));

        //테스트4
        int[] testArray4 = {1, 2, 3, 4, 5};
        System.out.println(finder.computeAverage(testArray4));
    }
}
