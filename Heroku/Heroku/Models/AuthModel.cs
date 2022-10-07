using System;
namespace Heroku.Models
{
    public class AuthModel
    {

        private string email; 
        private string password;

        public AuthModel(string email, string password)
        {
            this.email = email;
            this.password = password;
        }

        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
    }
}

