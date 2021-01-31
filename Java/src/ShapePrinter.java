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

		public void printFloydsPyramid(int height) {
				int a = 1;
				int b = 1;
				int h_Result = height * (height + 1) / 2;
				String h_String = Integer.toString(h_Result);
				String a_String = Integer.toString(a);
				for (int i = 1; i <= height; i++) {
						String blank = "";
						for (int j = a; a_String.length() <= h_String.length(); j++) {
								blank += " ";
						}
						while (a <= b) {
								if (a == b) {
										System.out.println(blank + a);
								} else {
										System.out.print(blank + a);
								}
								a += 1;
						}
				b += (i + 1);
				}
		}
}
