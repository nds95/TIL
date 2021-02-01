public class AverageFinder {
       	double computeAverage(int[] intArray) {
	    int sum = 0;
	    
	    for (int num : intArray) {
		   sum += num;
	    }

	    return (double) sum / intArray.length;
	}
}
