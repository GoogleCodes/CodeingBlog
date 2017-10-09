using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.SqlClient;


/// <summary>
/// UserController 的摘要说明
/// </summary>
public class UserController
{
    private SqlConnection conn = null;
    private SqlCommand cmd = null;
    private string ServiceName = "qds173644372.my3w.com";
    private string DBName = "qds173644372_db";
    private string uid = "qds173644372";
    private string pwd = "mysqlroot";

	public UserController()
	{
        conn = new SqlConnection("Server=qds173644372.my3w.com;database=qds173644372_db;uid=qds173644372;pwd=mysqlroot");
        conn.Open();

        cmd = new SqlCommand("select * from tb_user", conn);

        string msg = "";

        SqlDataReader dr = cmd.ExecuteReader();
        if (dr.Read())
        {
            msg = "梁辉棠" + dr["name"];
        }
	}
}