import java.util.Scanner;

public class Seat {
	private String name;

	public String getName() {
		return this.name;
	}

	public void reserve(String name) {
		this.name = name;
	}

	public void cancel() {
		this.name = null;
	}

	//예약된 자리 확인 후 boolean return;
	public boolean isOccupied() {
		if (name == null) {
			return false;
		} else {
			return true;
		}
	}

	public boolean match(String checkName) {
		if (checkName == name) {
			return false;
		} else {
			return true;
		}
	}
}
