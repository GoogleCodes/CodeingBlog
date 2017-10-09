using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using System.Data.SqlClient;

/// <summary>
/// WebService 的摘要说明
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
 [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //如果使用设计的组件，请取消注释以下行 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }

    [WebMethod(Description="****")]
    public string Select() {
        SqlConnection conn = new SqlConnection("Server=qds173644372.my3w.com;database=qds173644372_db;uid=qds173644372;pwd=mysqlroot");

        conn.Open();

        SqlCommand cmd = new SqlCommand("select * from tb_user", conn);

        string msg = "";

        SqlDataReader dr = cmd.ExecuteReader();
        if (dr.Read()) {
            msg = "梁辉棠" + dr["name"];
        }
        return msg;
    }
    
}
