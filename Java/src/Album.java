import java.util.ArrayList;

public class Album {
	public final String albumTitle;
	public final int year;
	public final Artist artist;

	private final ArrayList<Song> songs = new ArrayList<> ();

	public Album(String albumTitle, int year, Artist artist) {
		this.albumTitle = albumTitle;
		this.year = year;
		this.artist = artist;
	}

	public void addTrack(Song song) {
		songs.add(song);
	}
	
	public Song getTrack(int i) {
		return songs.get(i - 1);
	}
}
