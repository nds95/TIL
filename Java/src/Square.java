public class Square extends AbstractShape implements Printable {
	//길이
	double side;

	//생성자
	public Square(double side) {
		super(0, 0);
		this.side = side;
	}

	//넓이
	public double getArea() {
		return side * side;
	}

	//둘레
	public double getPerimeter() {
		return 4 * side;
	}
	
	//interface method 구현
	@Override
	public void print() {
		for (int i = 0; i < side; i++) {
			String a = "";
			for (int j = 0; j < side; j++) {
				a += "*";
			}
			System.out.println(a);
		}
	}
}
