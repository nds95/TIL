public class Song {
	public final String title;
	public final String artist;
	public Album album;

	public Song(String title, String artist, Album album) {
		this.title = title;
		this.artist = artist;
		this.album = album;
	}

	public String toString() {
		return title + " - " + artist + "\n" + album.albumTitle + "(" + album.year + ")";
	}
}
