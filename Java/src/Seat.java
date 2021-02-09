public class Seat {
	private String name;

	public String getName() {
		return name;
	}

	public void reserve(String name) {
		this.name = name;
	}

	public void cancel() {
		this.name = null;
	}

	//예약된 자리 확인 후 boolean return;
	public boolean isOccupied() {
		return name != null;
	}

	public boolean match(String checkName) {
		return name.equals(checkName);
	}
}
