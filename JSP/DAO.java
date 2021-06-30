package hrdkorea;

public class DAO {
	
	private DAO() {};
	private static DAO instance = new DAO();
	public static DAO getinstance() {
		return instance;
	}
	
}
