import java.util.ArrayList;

public class Artist {
	public static String name;

	private final ArrayList<Album> albums = new ArrayList<> ();

	public void Artist(String name) {
		this.name = name;
	}

	public void addAlbum(Album album) {
		albums.add(album);
	}

	public ArrayList<Album> getAlbums() {
		return albums;
	}
}
