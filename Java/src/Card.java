public class Card implements Comparable<Card> {
	public final int suitNumber;
	public final int rankNumber;
	
	public Card(int suitNumber, int rankNumber) {
		this.suitNumber = suitNumber;
		this.rankNumber = rankNumber;
	}

	public String getSuit() {
		switch (suitNumber) {
			case 1 :
				return "Clubs";
			case 2 :
				return "Diamonds";
			case 3 :
				return "Hearts";
			case 4 :
				return "Spades";
			default :
				return null;
		}
	}

	public String getRank() {
		switch (rankNumber) {
			case 1 :
				return "Ace";
			case 2 :
				return "2";
			case 3 :
				return "3";
			case 4 :
				return "4";
			case 5 :
				return "5";
			case 6 :
				return "6";
			case 7 :
				return "7";
			case 8 :
				return "8";
			case 9 :
				return "9";
			case 10 :
				return "10";
			case 11 :
				return "Jack";
			case 12 :
				return "Queen";
			case 13 :
				return "King";
			default :
				return null;
		}
	}

	@Override
	public String toString() {
		return getRank() + " of " + getSuit();
	}

	@Override
	public int compareTo(Card o) {
		int sortResult = suitNumber - o.suitNumber;

		if (suitNumber == o.suitNumber) {
			sortResult = rankNumber - o.rankNumber;
		}
		return sortResult;
	}
}
