public class GreatestDifferenceFinder {
	int greatestDifference(int[] intArray) {
		if (2 <= intArray.length) {
			int max = intArray[0];
			for (int i : intArray) {
				if (max < i) {
					max = i;
				}
			}
			int min = intArray[0];
			for (int i : intArray) {
				if (min > i) {
					min = i;
				}
			}
			return max - min;
		} else {
			return 0;
		}
	}
}	
