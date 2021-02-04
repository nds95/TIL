import java.util.HashMap;

public class WordDictionary {
		private HashMap<String, String> dictionary = new HashMap<> ();

		public void addWord(String English, String Korean) {
				dictionary.put(English, Korean);
		}

		public String find(String English) {
				return dictionary.get(English);
		}
}

