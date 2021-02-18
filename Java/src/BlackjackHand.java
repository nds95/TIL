import java.util.ArrayList;

public class BlackjackHand extends Deck {
	public int getValue() {
		int a = 0;
		
		for (Card card : getCards()) {
			a += ((BlackjackCard) card).getValue();
		}
		for (Card card : getCards()) {
			if (((BlackjackCard) card).isAce() && a > 21) {
				a -= 10;
			}
		}
		
		return a;
	}

	public boolean isBusted() {
		if (getValue() > 21) {
			return true;
		} else {
			return false;
		}
	}

	public boolean isBlackjack() {
		int cardsLength = cards.size();

		if (cardsLength == 2 && getValue() == 21) {
			return true;
		} else {
			return false;
		}
	}
}
