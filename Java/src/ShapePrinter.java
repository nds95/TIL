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
				int length = String.valueOf(height * (height + 1) / 2).length();
				int number = 1;
				
				//반복분 1 - 행을 바꾸는 반복문
				for (int row = 1; row <= height; row++) {
						//한 행에서 인쇄될 내용을 담는 문자열
						String line = "";
						//반복문 2 - 열을 바꾸는 반복문
						for(int col = 1; col <= row; col++) {
								//반복문 3 - 한 열 안에서 자리수를 맞추는 반복문
								for (int i = String.valueOf(number).length(); i < length; i++) {
										line += " ";
								}
								
								line += (number + " ");
								number += 1;
						}		
						System.out.println(line);		
				}
		}
}
