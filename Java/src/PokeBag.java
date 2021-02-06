import java.util.ArrayList;
import java.util.HashMap;

public class PokeBag {
	private final HashMap<String, ArrayList<Pokemon>> pokemons = new HashMap<> ();

	public ArrayList<Pokemon> getPokemons(String name) {
		return pokemons.get(name);
	}

	public void add(Pokemon pokemon) {
		String name = pokemon.name;

		//해당하는 ArrayList가 없으면 생성
		if (getPokemons(name) == null) {
			pokemons.put(name, new ArrayList<Pokemon>());
		}

		getPokemons(name).add(pokemon);
	}

	public Pokemon getStrongest(String name) {
		ArrayList<Pokemon> pokemonList = getPokemons(name);

		if (pokemonList == null) {
			return null;
		}
		//return할 포켓몬(가장 센 포켓몬)을 담을 변수
		Pokemon strongest = null;

		//name에 해당하는 ArrayList를 가져오고 탐색
		for (Pokemon pokemon : getPokemons(name)) {
			if (strongest == null || pokemon.cp > strongest.cp) {
				strongest = pokemon;
			}
		}
		return strongest;
	}

	public Pokemon getStrongest() {
		Pokemon strongest = null;

		for (String key : pokemons.keySet()) {
			Pokemon p = getStrongest(key);

			if (strongest == null || p.cp > strongest.cp) {
				strongest = p;
			}
		}
		return strongest;
	}
}

