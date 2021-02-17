import java.util.ArrayList;
import java.util.Random;
import java.util.Collections;

public class Deck {
	private ArrayList<Card> cards = new ArrayList<> ();

	Random rand = new Random();
	
	public ArrayList<Card> getCards() {
		return cards;
	}

	public void addCard(Card card) {
		cards.add(card);
	}
	
	public void print() {
		for (Card card : cards) {
			System.out.println(card.toString());
		}
	}

	public void shuffle() {
		int numberOfCard = 52;
		for (int i = 0; i < numberOfCard; i++) {
			int randNumber = rand.nextInt(numberOfCard) + 1;

			Collections.swap(cards, i, randNumber - 1);
		}
	}

	public Deck deal(int count) {
		Deck hand = new Deck();
		int cards_length = cards.size();

		for (int i = cards_length - 1; i >= (cards_length - count); i--) {
			hand.addCard(cards.get(i));
		}

		for (int i = 1; i <= count; i++) {
			cards.remove(cards.size() - 1);
		}

		return hand;
	}
}
