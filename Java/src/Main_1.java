public class Main_1 {
	public static void main(String[] args) {
		GreatestDifferenceFinder finder = new GreatestDifferenceFinder();

		//테스트1;
		int[] testArray1 = {-2, 7, 3};
		System.out.println(finder.greatestDifference(testArray1));

		//테스트2;
		int[] testArray2 = {8, 3, 14, 1};
		System.out.println(finder.greatestDifference(testArray2));
		
		//테스트3;
		int[] testArray3 = {4, 2, 3, 1};
		System.out.println(finder.greatestDifference(testArray3));
		
		//테스트4;
		int[] testArray4 = {};
		System.out.println(finder.greatestDifference(testArray4));
		
		//테스트5;
		int[] testArray5 = {1, 2, -3, 4, 5};
		System.out.println(finder.greatestDifference(testArray5));

		//테스트6;
		int[] testArray6 = {1};
		System.out.println(finder.greatestDifference(testArray6));
	}
}
