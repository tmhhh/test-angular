using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Heroku.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Heroku.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _config;



        public AuthController(IConfiguration config)
        {
            _config = config;
        }
        // GET: api/values
        [HttpPost("login")]
        public StatusCodeResult UserLogin([FromBody] Models.AuthModel AuthData )
        {
                try 
                { 
                    SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();

                    builder.ConnectionString = _config.GetValue<string>("ConnectionStrings:MyDB");
                    using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
                    {
                        Console.WriteLine("\nQuery data example:");
                        Console.WriteLine("=========================================\n");
                    
                        connection.Open();       

                        String sql = "SELECT * FROM Users where email= '"+AuthData.Email+"' AND password= '"+AuthData.Password+"'";
                        Console.WriteLine(sql);

                        using (SqlCommand command = new SqlCommand(sql, connection))
                        {
                            using (SqlDataReader reader = command.ExecuteReader())
                            {
                                if (reader.HasRows)
                                {
                                    return Ok();
                                }

                                return StatusCode(401);
                            };
                        }                    
                    }
                }
                catch (SqlException e)
                {
                    Console.WriteLine(e.ToString());
                    return StatusCode(500);

                }
                
                

          
        }

    
    }
}

