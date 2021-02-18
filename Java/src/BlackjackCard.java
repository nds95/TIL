public class BlackjackCard extends Card {
	public BlackjackCard(int suit, int rank) {
		super(suit, rank);
	}

	public int getValue() {
		switch (getRank()) {
			case "Ace" :
				return 11;
			case "Jack" :
			case "Queen" :
			case "King" :
				return 10;
			default :
				return Integer.valueOf(getRank());
		}
	}

	public boolean isAce() {
		if (getValue() == 11) {
			return true;
		} else {
			return false;
		}
	}
}
