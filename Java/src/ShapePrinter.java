public class ShapePrinter {
		public void printTriangle(int height) {
				String star = "* ";
				for (int i = 1; i <= height; i++) {
						System.out.println(star);
						star += "* ";
				}
		}

		public void printPyramid(int height) {
				for (int k = 1; k <= height; k++) {
						String pyramid = "";
						for (int i = k; i <= height; i++) {
								pyramid += " ";
						}
						for (int i = 1; i <= k * 2 - 1; i++) {
								pyramid += "*";
						}
						System.out.println(pyramid);
				}
		}
}
