public class Course{
	public static final int CREDIT_MAJOR = 3;
	public static final int CREDIT_GENERAL = 2;
	
	public final String name;
	public final String grade;
	public final int credit;

	public Course(String name, int credit, String grade) {
		this.name = name;
		this.grade = grade;
		this.credit = credit;
	}
}
