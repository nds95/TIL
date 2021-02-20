import java.util.ArrayList;
import java.util.Random;

public class Deck<T extends Card> {
	protected ArrayList<T> cards;

	public Deck() {
		cards = new ArrayList<T> ();
	}

	public ArrayList<T> getCards() {
		return cards;
	}

	public void addCard(T card) {
		cards.add(card);
	}
	
	public void print() {
		for (T card : cards) {
			System.out.println(card.toString());
		}
	}

	public void shuffle() {
		Random rand = new Random();

		for (int i = 0; i < cards.size(); i++) {
			int randNumber = rand.nextInt(cards.size());
			T temp = cards.get(i);
			cards.set(i, cards.get(randNumber));
			cards.set(randNumber, temp);
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
