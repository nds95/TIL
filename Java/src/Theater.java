public class Theater {

    private Seat[][] seats;

	private int rowCount, colCount;

	public Theater(int rowCount, int colCount) {

		if (rowCount > 26) {
			rowCount = 26;
		}
		this.rowCount = rowCount;
		this.colCount = colCount;
		
		//seats에 2차원 배열 만들기;
		seats = new Seat[rowCount][colCount];

		for (int i = 0; i < seats.length; i++) {
			for (int j = 0; j < seats[i].length; j++) {
				seats[i][j] = new Seat();
			}
		}
	}

	public void printSeatMatrix() {
		System.out.print("  ");
		for (int i = 1; i <= 9; i++) {
			System.out.print("  " + i);
		}
		System.out.println();

		for (int i = 0; i < rowCount; i++) {
			System.out.print((char) ('A' + i) + ": ");
			for (int j = 0; j < colCount; j++) {
				Seat s = seats[i][j];
				if (s.isOccupied()) {
					System.out.print("[0]");
				} else {
					System.out.print("{ }");
				}
			}
			System.out.println();
		}
	}
	
	public boolean reserve(String name, char rowChar, int col, int numSeat) {
		//true or false 카운트 값 정의;
		int bool_Count = 0;
		
		//예약이 불가능한 상황
		if (bool_Count == 0) {
			//존재하지 않는 좌석을 입력할 시;
			if (seats.length < getRowIndex(rowChar) || seats[0].length < col) {
				return false;
			} else if ((col - 1) + numSeat > seats[0].length) {
				return false;
			}

			//예약요청석에 이미 예약이 돼있을 시;
			for (int i = 0; i < numSeat; i++) {
				if (seats[getRowIndex(rowChar)][(col - 1) + i].isOccupied()) {
					return false;
				} else {
					bool_Count += 1;
				}
			}
		}
		//예약이 가능한 상황;
		if (bool_Count >= 1) {
			for (int i = 0; i < numSeat; i++) {
				seats[getRowIndex(rowChar)][(col - 1) + i].reserve(name);
			}
		}

		if (bool_Count == 0) {
			return false;
		} else {
			return true;
		}
	}

	public int cancel(String name) {
		int cancel_Count = 0;

		for (int i = 0; i < seats.length; i++) {
			for (int j = 0; j < seats[i].length; j++) {
				if (seats[i][j].getName() == name) {
					seats[i][j].cancel();
					cancel_Count += 1;
				}
			}
		}

		return cancel_Count;
	}
	
	public int cancel(char rowChar, int col, int numSeat) {
		int cancel_Count = 0;
		
		for (int i = 0; i < numSeat; i++) {
			if (seats[getRowIndex(rowChar)][(col - 1) + i].isOccupied()) {
				seats[getRowIndex(rowChar)][(col - 1) + i].cancel();
				cancel_Count += 1;
			}
		}

		return cancel_Count;
	}

	private int getRowIndex(char uppercaseChar) {
		return uppercaseChar - 'A';
	}

	public int getNumberOfReservedSeat() {
		int reserve_Count = 0;

		for (int i = 0; i < rowCount; i++) {
			for (int j = 0; j < colCount; j++) {
				if (seats[i][j].isOccupied()) {
					reserve_Count += 1;
				}
			}
		}

		return reserve_Count;
	}
}
