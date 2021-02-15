import java.util.ArrayList;

public class Album {
	public static String albumTitle;
	public static int year;
	public static String artist;

	private final ArrayList<Song> songs = new ArrayList<> ();

	public void Album(String albumTitle, int year, String artist) {
		this.albumTitle = albumTitle;
		this.year = year;
		this.artist = artist;
	}

	public void addTrack(Song song) {
		songs.add(song);
	}
	
	public Song getTrack(int i) {
		return songs.get(i);
	}
}
