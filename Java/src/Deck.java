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

		for (int i = 0; i < count; i++) {
			hand.addCard(cards.remove(0));
		}

		return hand;
	}
}
