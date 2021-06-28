package DB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBManager {
	public static Connection getConnection() throws Exception {
		Connection conn = null;
		String driver = "oracle.jdbc.driver.OracleDriver";
		String user = "jsltest";
		String pw = "1234";
		String url = "jdbc:oracle:thin:@//localhost:1521/xe";
		
		Class.forName(driver);
		conn = DriverManager.getConnection(url, user, pw);
		
		return conn;
	}
	
	public static void close(Connection conn, PreparedStatement pstmt, ResultSet rs) {
		try {
			if(rs !=null) rs.close();
			if(pstmt !=null) pstmt.close();
			if(conn !=null) conn.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void close(Connection conn, PreparedStatement pstmt) {
		try {
			if(pstmt !=null) pstmt.close();
			if(conn !=null) conn.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
